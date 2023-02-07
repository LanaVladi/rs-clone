import { BaseController } from '../controller/BaseController';
import { WeatherMapController } from '../controller/WeatherMapController';
// import { WeatherRadarController } from '../controller/WeatherRadarController';
import { WeatherTodayController } from '../controller/WeatherTodayController';

type routes = Map<string, () => BaseController>;

export class Router {
    private container: HTMLElement;
    private routes: routes;
    private currentRoute?: string;
    private pageController?: BaseController;

    constructor(container: HTMLElement) {
        this.container = container;
        this.routes = new Map<string, () => BaseController>([
            ['today', () => new WeatherTodayController()],
            // ['hourbyhour', () => new WeatherHourByHourController(this)],
            // ['tenday', () => new WeatherTenDayController(this)],
            // ['weekend', () => new WeatherWeekendController(this)],
            // ['monthly', () => new WeatherMonthlyController(this)],
            ['radar', () => new WeatherMapController(this)],
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
