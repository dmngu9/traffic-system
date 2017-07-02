import {GreenRedState, IState, RedGreenState, RedYellowState, SIGNAL, YellowRedState} from './state';
import {TrafficLight} from './trafficLight';

export class StateMachine {

    private greenRedState: IState;
    private yellowRedState: IState;
    private redGreenState: IState;
    private redYellowState: IState;
    private currentState: IState;
    private startSimulation: boolean;

    constructor(private northTrafficLight: TrafficLight,
                private southTrafficLight: TrafficLight,
                private eastTrafficLight: TrafficLight,
                private westTrafficLight: TrafficLight) {
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
        this.resetLightSignals();
    }

    public changeState(): void {
        this.currentState.changeState();
    }

    public setState(state: IState): void {
        this.currentState = state;
        this.repeatCycle();
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

    private changeLightSignals(): void {
        const stateSignals = this.currentState.getStateSignals();
        this.northTrafficLight.setSignal(stateSignals.NORTH_SOUTH);
        this.southTrafficLight.setSignal(stateSignals.NORTH_SOUTH);
        this.eastTrafficLight.setSignal(stateSignals.EAST_WEST);
        this.westTrafficLight.setSignal(stateSignals.EAST_WEST);
    }

    private resetLightSignals(): void {
        this.northTrafficLight.setSignal(SIGNAL.INACTIVE);
        this.southTrafficLight.setSignal(SIGNAL.INACTIVE);
        this.eastTrafficLight.setSignal(SIGNAL.INACTIVE);
        this.westTrafficLight.setSignal(SIGNAL.INACTIVE);
    }

    private repeatCycle(): void {
        if (this.startSimulation) {
            this.changeLightSignals();
            this.changeState();
        }
    }
}
