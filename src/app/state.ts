import {StateMachine} from './stateMachine';

export interface IState {
    changeState: (stateMachine: StateMachine) => void;
}

export class GreenRedState implements IState {

    constructor(private stateMachine: StateMachine) {}

    public changeState(stateMachine: StateMachine) {
        this.stateMachine.setState(this.stateMachine.getYellowRedState());
    }
}

export class YellowRedState implements IState {
    constructor(private stateMachine: StateMachine) {}

    public changeState(stateMachine: StateMachine) {
        this.stateMachine.setState(this.stateMachine.getRedGreenState());
    }
}

export class RedGreenState implements IState {
    constructor(private stateMachine: StateMachine) {}

    public changeState(stateMachine: StateMachine) {
        this.stateMachine.setState(this.stateMachine.getRedYellowState());
    }
}

export class RedYellowState implements IState {
    constructor(private stateMachine: StateMachine) {}

    public changeState(stateMachine: StateMachine) {
        this.stateMachine.setState(this.stateMachine.getGreenRedState());
    }
}
