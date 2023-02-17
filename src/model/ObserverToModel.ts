import INotify, { NotifyParameters, ViewEvent } from '../types';

export class ObserverToModel {
    private subscribers = new Map<ViewEvent, Array<INotify>>();

    subscribe(event: ViewEvent, subscriber: INotify) {
        if (this.subscribers.has(event)) {
            const subscribers = this.subscribers.get(event);
            subscribers?.push(subscriber);
        } else {
            this.subscribers.set(event, new Array<INotify>(subscriber));
        }
        return this;
    }

    notify<T>(event: ViewEvent, params: NotifyParameters<T>) {
        const subscribers = this.subscribers.get(event);
        if (subscribers) {
            subscribers.forEach((subscriber) => {
                subscriber.notify(params);
            });
        }
    }
}
