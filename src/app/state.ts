import {StateMachine} from './stateMachine';

const PERIOD = {
    GREEN_OR_RED: 30000,
    YELLOW: 10000
};

export interface IState {
    changeState: () => void;
}

export class GreenRedState implements IState {

    constructor(private stateMachine: StateMachine) {}

    public changeState() {
        setTimeout(() => {
            this.stateMachine.setState(this.stateMachine.getYellowRedState());
        }, PERIOD.GREEN_OR_RED);
    }
}

export class YellowRedState implements IState {

    constructor(private stateMachine: StateMachine) {}

    public changeState() {
        setTimeout(() => {
            this.stateMachine.setState(this.stateMachine.getRedGreenState());
        }, PERIOD.YELLOW);
    }
}

export class RedGreenState implements IState {

    constructor(private stateMachine: StateMachine) {}

    public changeState() {
        setTimeout(() => {
            this.stateMachine.setState(this.stateMachine.getRedYellowState());
        }, PERIOD.GREEN_OR_RED);
    }
}

export class RedYellowState implements IState {

    constructor(private stateMachine: StateMachine) {}

    public changeState() {
        setTimeout(() => {
            this.stateMachine.setState(this.stateMachine.getGreenRedState());
        }, PERIOD.GREEN_OR_RED);
    }
}
