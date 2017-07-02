import {SIGNAL} from './state';

export class TrafficLight {

    constructor(private position: string,
                private signal: string,
                private element?: Element) {}

    public setSignal(signal: string): void {
        this.signal = signal;
        if (this.element) {
            this.element.classList.remove(this.element.classList.item(0));
            this.element.classList.add(signal);
        }
    }

    public getSignal(): string {
        return this.signal;
    }
}

