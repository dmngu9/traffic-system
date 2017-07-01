export enum SIGNAL {
    GREEN,
    YELLOW,
    RED
}

export class TrafficLight {

    constructor(private element: HTMLElement,
                private position: string,
                private signal: SIGNAL) {}

    public setSignalAndColor(signal: SIGNAL): void {
        this.signal = signal;
        this.setColor();
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

