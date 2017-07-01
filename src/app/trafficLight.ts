import {SIGNAL} from './state';

export class TrafficLight {

    constructor(private position: string,
                private signal: SIGNAL,
                private element?: HTMLElement) {}

    public setSignal(signal: SIGNAL): void {
        this.signal = signal;
        if (this.element) {
            this.setColor();
        }
    }

    private setColor(): void {
        switch(this.signal) {
            case SIGNAL.GREEN: {
                this.element.style.background = 'green';
                break;
            }
            case SIGNAL.YELLOW: {
                this.element.style.background = 'yellow';
                break;
            }
            case SIGNAL.RED: {
                this.element.style.background = 'red';
                break;
            }
            default: {
                break;
            }
        }
    }
}

