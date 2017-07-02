import {StateMachine} from './stateMachine';

export const PERIOD = {
    GREEN_OR_RED: 10000,
    YELLOW: 5000,
    SIMULATION: 333333333
};

export const SIGNAL = {
    GREEN: 'green',
    YELLOW: 'yellow',
    RED: 'red',
    INACTIVE: 'gray'
}

export interface IState {
    changeState: () => void;
    getStateSignals: () => any;
}

export class GreenRedState implements IState {

    constructor(private stateMachine: StateMachine) {}

    public changeState(): void {
        setTimeout(() => {
            this.stateMachine.setState(this.stateMachine.getYellowRedState());
        }, PERIOD.GREEN_OR_RED);
    }

    public getStateSignals(): any {
        return {
            NORTH_SOUTH: SIGNAL.GREEN,
            EAST_WEST: SIGNAL.RED
        };
    }
}

export class YellowRedState implements IState {

    constructor(private stateMachine: StateMachine) {}

    public changeState(): void {
        setTimeout(() => {
            this.stateMachine.setState(this.stateMachine.getRedGreenState());
        }, PERIOD.YELLOW);
    }

    public getStateSignals(): any {
        return {
            NORTH_SOUTH: SIGNAL.YELLOW,
            EAST_WEST: SIGNAL.RED
        };
    }
}

export class RedGreenState implements IState {

    constructor(private stateMachine: StateMachine) {}

    public changeState(): void {
        setTimeout(() => {
            this.stateMachine.setState(this.stateMachine.getRedYellowState());
        }, PERIOD.GREEN_OR_RED);
    }

    public getStateSignals(): any {
        return {
            NORTH_SOUTH: SIGNAL.RED,
            EAST_WEST: SIGNAL.GREEN
        };
    }
}

export class RedYellowState implements IState {

    constructor(private stateMachine: StateMachine) {}

    public changeState(): void {
        setTimeout(() => {
            this.stateMachine.setState(this.stateMachine.getGreenRedState());
        }, PERIOD.YELLOW);
    }

    public getStateSignals(): any {
        return {
            NORTH_SOUTH: SIGNAL.RED,
            EAST_WEST: SIGNAL.YELLOW
        };
    }
}
