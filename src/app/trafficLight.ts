import {SIGNAL} from './state';

export class TrafficLight {

    private greenLight: Element;
    private yellowLight: Element;
    private redLight: Element;

    constructor(private position: string,
                private signal: string,
                private element?: Element) {
        this.setElement(element);
    }

    public setSignal(signal: string): void {
        this.setColor(signal);
        this.signal = signal;
    }

    public setElement(el: Element): void {
        if (el) {
            this.greenLight = this.element.querySelector('.box div:nth-child(1)');
            this.yellowLight = this.element.querySelector('.box div:nth-child(2)');
            this.redLight = this.element.querySelector('.box div:nth-child(3)');
        }
    }

    public getSignal(): string {
        return this.signal;
    }

    private setColor(signal: string): void {
        if (this.element) {
            switch (signal) {
                case SIGNAL.GREEN: {
                    this.redLight.classList.remove(this.signal);
                    this.greenLight.classList.add(signal);
                    break;
                }
                case SIGNAL.YELLOW: {
                    this.greenLight.classList.remove(this.signal);
                    this.yellowLight.classList.add(signal);
                    break;
                }
                case SIGNAL.RED: {
                    this.yellowLight.classList.remove(this.signal);
                    this.redLight.classList.add(signal);
                    break;
                }
                case SIGNAL.INACTIVE: {
                    this.element.querySelector(`.${this.signal}`).classList.remove(this.signal);
                    break;
                }
                default: {
                    break;
                }
            }
        }
    }
}

