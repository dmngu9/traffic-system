import {GreenRedState, AbstractState, RedGreenState, RedYellowState, SIGNAL, YellowRedState} from './state';
import {TrafficLightController} from './trafficLightController';

export class StateMachine {

    private greenRedState: AbstractState;
    private yellowRedState: AbstractState;
    private redGreenState: AbstractState;
    private redYellowState: AbstractState;
    private currentState: AbstractState;
    private startSimulation: boolean;

    constructor(private trafficLightController: TrafficLightController) {
        this.greenRedState = new GreenRedState(this);
        this.yellowRedState = new YellowRedState(this);
        this.redGreenState = new RedGreenState(this);
        this.redYellowState = new RedYellowState(this);
        this.currentState = this.greenRedState;
        this.startSimulation = false;
    }

    public init(): void {
        this.startSimulation = true;
        this.repeatCycle();
    }

    public destroy(): void {
        this.startSimulation = false;
        this.currentState = this.greenRedState;
        this.trafficLightController.resetLightSignals();
    }

    public changeState(): void {
        this.currentState.changeState();
    }

    public setState(state: AbstractState): void {
        this.currentState = state;
        this.repeatCycle();
    }

    public getGreenRedState(): AbstractState {
        return this.greenRedState;
    }

    public getYellowRedState(): AbstractState {
        return this.yellowRedState;
    }

    public getRedGreenState(): AbstractState {
        return this.redGreenState;
    }

    public getRedYellowState(): AbstractState {
        return this.redYellowState;
    }

    public getCurrentState(): AbstractState {
        return this.currentState;
    }

    private repeatCycle(): void {
        if (this.startSimulation) {
            this.trafficLightController.changeLightSignals(this.currentState.getStateSignals());
            this.changeState();
        }
    }
}
