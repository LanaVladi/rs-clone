import { AirQualityPageController } from '../controller/AirQualityPageController';
import { BaseController } from '../controller/BaseController';
import { WeatherFiveDaysPageController } from '../controller/WeatherFiveDaysPageController';
import { WeatherTodayPageController } from '../controller/WeatherTodayPageController';
import { ObserverToView } from '../model/ObserverToView';
import { WeatherMapPageController } from './../controller/WeatherMapPageController';
import { TranslatorModel } from './../model/TranslatorModel';

type routes = Map<string, BaseController>;

export class Router {
    private container: HTMLElement;
    private routes: routes;
    private currentRoute?: string;
    private pageController?: BaseController;

    constructor(container: HTMLElement, observerToView: ObserverToView, language: TranslatorModel) {
        this.container = container;

        const weatherTodayPageController = new WeatherTodayPageController(this, observerToView, language);
        const weatherFiveDaysPageController = new WeatherFiveDaysPageController(this, observerToView, language);
        const weatherMapPageController = new WeatherMapPageController(this, observerToView, language);
        const airQualityPageController = new AirQualityPageController(this, observerToView, language);

        this.routes = new Map<string, BaseController>([
            ['today', weatherTodayPageController],
            ['five-days', weatherFiveDaysPageController],
            ['map', weatherMapPageController],
            ['air-quality', airQualityPageController],
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

    private getController(pageRoute: string): BaseController {
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
        this.pageController = this.getController(pageRoute);
        this.container.innerHTML = '';
        this.pageController.show();
        this.container.append(this.pageController.component.element);
        this.currentRoute = pageRoute;
    }

    private navigateByArrows(): void {
        window.addEventListener('popstate', () => {
            this.goTo(this.getCurrentRoute());
        });
    }
}
