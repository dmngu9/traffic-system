import {SIGNAL} from './state';

export class TrafficLight {

    private greenLight: Element;
    private yellowLight: Element;
    private redLight: Element;
    private lightbox: Element;

    constructor(private position: string,
                private signal: string,
                element?: Element) {
        this.setElement(element);
    }

    public setSignal(signal: string): void {
        this.signal = signal;
        this.setColor(signal);
    }

    public setElement(el: Element): void {
        if (el) {
            this.lightbox = el;
            this.greenLight = this.lightbox.querySelector('.box div:nth-child(1)');
            this.yellowLight = this.lightbox.querySelector('.box div:nth-child(2)');
            this.redLight = this.lightbox.querySelector('.box div:nth-child(3)');
        }
    }

    public getSignal(): string {
        return this.signal;
    }

    private setColor(signal: string): void {
        if (this.lightbox) {
            this.disableAllLights();
            switch (signal) {
                case SIGNAL.GREEN: {
                    this.enableGreenLight();
                    break;
                }
                case SIGNAL.YELLOW: {
                    this.enableYellowLight();
                    break;
                }
                case SIGNAL.RED: {
                    this.enableRedLight();
                    break;
                }
                default: {
                    break;
                }
            }
        }
    }

    private disableAllLights(): void {
        this.greenLight.classList.remove(SIGNAL.GREEN);
        this.yellowLight.classList.remove(SIGNAL.YELLOW);
        this.redLight.classList.remove(SIGNAL.RED);
    }

    private enableGreenLight(): void {
        this.greenLight.classList.add(SIGNAL.GREEN);
    }

    private enableYellowLight(): void {
        this.yellowLight.classList.add(SIGNAL.YELLOW);
    }

    private enableRedLight(): void {
        this.redLight.classList.add(SIGNAL.RED);
    }
}

