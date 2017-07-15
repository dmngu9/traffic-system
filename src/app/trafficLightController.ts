import {TrafficLight} from './trafficLight';
import {SIGNAL} from './state';

export class TrafficLightController {

    constructor(private northTrafficLight: TrafficLight,
                private southTrafficLight: TrafficLight,
                private eastTrafficLight: TrafficLight,
                private westTrafficLight: TrafficLight) {}

    public changeLightSignals(stateSignals: any): void {
        this.northTrafficLight.setSignal(stateSignals.NORTH_SOUTH);
        this.southTrafficLight.setSignal(stateSignals.NORTH_SOUTH);
        this.eastTrafficLight.setSignal(stateSignals.EAST_WEST);
        this.westTrafficLight.setSignal(stateSignals.EAST_WEST);
    }

    public resetLightSignals(): void {
        this.northTrafficLight.setSignal(SIGNAL.INACTIVE);
        this.southTrafficLight.setSignal(SIGNAL.INACTIVE);
        this.eastTrafficLight.setSignal(SIGNAL.INACTIVE);
        this.westTrafficLight.setSignal(SIGNAL.INACTIVE);
    }
}
