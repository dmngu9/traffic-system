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
        this.enableSimulation();
        this.repeatCycle();
    }

    public destroy(): void {
        this.disableSimulation();
        this.clearCallbacks();
        this.currentState = this.greenRedState;
        this.trafficLightController.resetLightSignals();
    }

    public changeState(): void {
        this.currentState.changeState();
    }

    public enableSimulation(): void {
        this.startSimulation = true;
    }

    public disableSimulation(): void {
        this.startSimulation = false;
    }

    public repeatCycle(): void {
        if (this.startSimulation) {
            this.trafficLightController.changeLightSignals(this.currentState.getStateSignals());
            this.changeState();
        }
    }

    public setState(state: AbstractState): void {
        this.currentState = state;
        this.repeatCycle();
    }

    public clearCallbacks(): void {
        this.greenRedState.clearTimeout();
        this.yellowRedState.clearTimeout();
        this.redGreenState.clearTimeout();
        this.redYellowState.clearTimeout();
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

    public getTrafficLightController(): TrafficLightController {
        return this.trafficLightController;
    }
}
