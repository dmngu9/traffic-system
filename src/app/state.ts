import {StateMachine} from './stateMachine';

export const PERIOD = {
    GREEN_OR_RED: 270000, // 4.5 mins
    YELLOW: 30000, // 30s
    SIMULATION: 1800000 // 30 mins
};

export const SIGNAL = {
    GREEN: 'green',
    YELLOW: 'yellow',
    RED: 'red',
    INACTIVE: 'gray'
};

export abstract class AbstractState {
    protected timer: number;
    abstract changeState(): void;
    abstract getStateSignals(): any;
    public setTimer(period: number): void {
        this.timer = period;
    }
}

export class GreenRedState extends AbstractState {

    constructor(private stateMachine: StateMachine) {
        super();
        this.timer = PERIOD.GREEN_OR_RED;
    }

    public changeState(): void {
        setTimeout(() => {
            this.stateMachine.setState(this.stateMachine.getYellowRedState());
        }, this.timer);
    }

    public getStateSignals(): any {
        return {
            NORTH_SOUTH: SIGNAL.GREEN,
            EAST_WEST: SIGNAL.RED
        };
    }
}

export class YellowRedState extends AbstractState {

    constructor(private stateMachine: StateMachine) {
        super();
        this.timer = PERIOD.YELLOW;
    }

    public changeState(): void {
        setTimeout(() => {
            this.stateMachine.setState(this.stateMachine.getRedGreenState());
        }, this.timer);
    }

    public getStateSignals(): any {
        return {
            NORTH_SOUTH: SIGNAL.YELLOW,
            EAST_WEST: SIGNAL.RED
        };
    }
}

export class RedGreenState extends AbstractState {

    constructor(private stateMachine: StateMachine) {
        super();
        this.timer = PERIOD.GREEN_OR_RED;
    }

    public changeState(): void {
        setTimeout(() => {
            this.stateMachine.setState(this.stateMachine.getRedYellowState());
        }, this.timer);
    }

    public getStateSignals(): any {
        return {
            NORTH_SOUTH: SIGNAL.RED,
            EAST_WEST: SIGNAL.GREEN
        };
    }
}

export class RedYellowState extends AbstractState {

    constructor(private stateMachine: StateMachine) {
        super();
        this.timer = PERIOD.YELLOW;
    }

    public changeState(): void {
        setTimeout(() => {
            this.stateMachine.setState(this.stateMachine.getGreenRedState());
        }, this.timer);
    }

    public getStateSignals(): any {
        return {
            NORTH_SOUTH: SIGNAL.RED,
            EAST_WEST: SIGNAL.YELLOW
        };
    }
}
