import {GreenRedState, IState, RedGreenState, RedYellowState, YellowRedState} from './state';

export class StateMachine {

    private GreenRedState: IState;
    private YellowRedState: IState;
    private RedGreenState: IState;
    private RedYellowState: IState;
    private currentState: IState;

    constructor() {
        this.GreenRedState = new GreenRedState(this);
        this.YellowRedState = new YellowRedState(this);
        this.RedGreenState = new RedGreenState(this);
        this.RedYellowState = new RedYellowState(this);
        this.currentState = this.GreenRedState;
    }

    public changeState(): void {
        this.currentState.changeState(this);
    }

    public setState(state: IState): void {
        this.currentState = state;
    }

    public getGreenRedState(): IState {
        return this.GreenRedState;
    }

    public getYellowRedState(): IState {
        return this.YellowRedState;
    }

    public getRedGreenState(): IState {
        return this.RedGreenState;
    }

    public getRedYellowState(): IState {
        return this.RedYellowState;
    }

    public getCurrentState(): IState {
        return this.currentState;
    }
}
