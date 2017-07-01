import {StateMachine} from './stateMachine';

class Simulator {

    private northTrafficLight;
    private southTrafficLight;
    private eastTrafficLight;
    private westTrafficLight;
    private stateMachine;

    constructor() {
        this.stateMachine = new StateMachine();
    }
}