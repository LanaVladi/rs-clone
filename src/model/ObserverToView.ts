import INotify, { ModelEvent, NotifyParameters } from '../types';

export class ObserverToView {
    private subscribers = new Map<ModelEvent, Array<INotify>>();

    subscribe(event: ModelEvent, subscriber: INotify) {
        if (this.subscribers.has(event)) {
            const subscribers = this.subscribers.get(event);
            subscribers?.push(subscriber);
        } else {
            this.subscribers.set(event, new Array<INotify>(subscriber));
        }
        return this;
    }

    notify<T>(event: ModelEvent, params: NotifyParameters<T>) {
        const subscribers = this.subscribers.get(event);
        if (subscribers) {
            subscribers.forEach((subscriber) => {
                subscriber.notify(params);
            });
        }
    }
}
