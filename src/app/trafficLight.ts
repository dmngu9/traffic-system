import {SIGNAL} from './state';

export class TrafficLight {

    constructor(private position: string,
                private signal: SIGNAL,
                private element?: Element) {}

    public setSignal(signal: SIGNAL): void {
        this.signal = signal;
        if (this.element) {
            this.setColor();
        }
    }

    private setColor(): void {
        switch(this.signal) {
            case SIGNAL.GREEN: {
                this.element.classList.remove('red');
                this.element.classList.add('green');
                break;
            }
            case SIGNAL.YELLOW: {
                this.element.classList.remove('green');
                this.element.classList.add('yellow');
                break;
            }
            case SIGNAL.RED: {
                this.element.classList.remove('yellow');
                this.element.classList.add('red');
                break;
            }
            default: {
                break;
            }
        }
    }
}

