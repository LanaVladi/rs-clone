import { NotifyParameters } from '../types';

export class ObserverToModel {
    // eslint-disable-next-line @typescript-eslint/ban-types
    private subscribers: Array<Function> = new Array<Function>();

    // eslint-disable-next-line @typescript-eslint/ban-types
    subscribe(subscriber: Function) {
        this.subscribers.push(subscriber);
    }

    public notify<T>(params: NotifyParameters<T>): void {
        this.subscribers.forEach((subscriber) => subscriber(params));
    }
}
