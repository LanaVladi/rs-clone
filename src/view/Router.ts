import { AirQualityPageController } from '../controller/AirQualityPageController';
import { BaseController } from '../controller/BaseController';
import { WeatherFiveDaysPageController } from '../controller/WeatherFiveDaysPageController';
import { WeatherTodayPageController } from '../controller/WeatherTodayPageController';
import { ObserverToView } from '../model/ObserverToView';
import { WeatherMapPageController } from './../controller/WeatherMapPageController';

type routes = Map<string, () => BaseController>;

export class Router {
    private container: HTMLElement;
    private routes: routes;
    private currentRoute?: string;
    private pageController?: BaseController;

    constructor(container: HTMLElement, observerToView: ObserverToView) {
        this.container = container;
        this.routes = new Map<string, () => BaseController>([
            ['today', () => new WeatherTodayPageController(this, observerToView)],
            ['five-days', () => new WeatherFiveDaysPageController(this, observerToView)],
            ['map', () => new WeatherMapPageController(this, observerToView)],
            ['air-quality', () => new AirQualityPageController(this, observerToView)],
        ]);

        const currentRoute = this.getCurrentRoute();
        this.goTo(currentRoute);
        this.navigateByArrows();
    }

    private getCurrentRoute() {
        const UrlSegments = window.location.pathname.split('/').filter((segment) => !!segment);
        const currentRoute = UrlSegments.join('/');
        return currentRoute;
    }

    private updateUrl(url: string) {
        if (url === '') {
            url = 'today';
        }
        if (url !== this.getCurrentRoute()) {
            history.pushState(null, '', url);
        }
    }

    private getController(pageRoute: string): () => BaseController {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if (pageRoute === '') return this.routes.get('today')!;

        let selectedPage = '';
        for (const templatePage of this.routes.keys()) {
            const mainPageRoute = pageRoute.split('/')[0] || '';
            if (mainPageRoute === templatePage) selectedPage = templatePage;
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.routes.get(selectedPage || '404 Not Found')!;
    }

    public goTo(pageRoute: string): void {
        if (this.currentRoute === pageRoute) return;
        this.updateUrl(pageRoute);
        const controller = this.getController(pageRoute);
        this.pageController = controller();
        this.container.innerHTML = '';
        this.container.append(this.pageController.component.element);
        this.currentRoute = pageRoute;
    }

    private navigateByArrows(): void {
        window.addEventListener('popstate', () => {
            this.goTo(this.getCurrentRoute());
        });
    }
}
