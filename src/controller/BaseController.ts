import { BaseComponent } from '../view/BaseComponent';

export abstract class BaseController<T extends BaseComponent<unknown> = BaseComponent<unknown>> {
    public abstract component: T;
}
