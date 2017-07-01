import {GreenRedState, IState, RedGreenState, RedYellowState, YellowRedState} from './state';

export class StateMachine {

    private greenRedState: IState;
    private yellowRedState: IState;
    private redGreenState: IState;
    private redYellowState: IState;
    private currentState: IState;

    constructor() {
        this.greenRedState = new GreenRedState(this);
        this.yellowRedState = new YellowRedState(this);
        this.redGreenState = new RedGreenState(this);
        this.redYellowState = new RedYellowState(this);
        this.currentState = this.greenRedState;
    }

    public changeState(): void {
        this.currentState.changeState();
    }

    public setState(state: IState): void {
        this.currentState = state;
    }

    public getGreenRedState(): IState {
        return this.greenRedState;
    }

    public getYellowRedState(): IState {
        return this.yellowRedState;
    }

    public getRedGreenState(): IState {
        return this.redGreenState;
    }

    public getRedYellowState(): IState {
        return this.redYellowState;
    }

    public getCurrentState(): IState {
        return this.currentState;
    }
}
