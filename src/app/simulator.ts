import {TrafficLight} from './trafficLight';
import {StateMachine} from './stateMachine';
import {TrafficLightController} from './trafficLightController';
import {PERIOD} from './state';

const northTrafficLight = new TrafficLight('north', undefined, document.querySelector('#north'));
const southTrafficLight = new TrafficLight('south', undefined, document.querySelector('#south'));
const eastTrafficLight = new TrafficLight('east', undefined, document.querySelector('#east'));
const westTrafficLight = new TrafficLight('west', undefined, document.querySelector('#west'));

const trafficLightController = new TrafficLightController(northTrafficLight,
                                                          southTrafficLight,
                                                          eastTrafficLight,
                                                          westTrafficLight);

const stateMachine = new StateMachine(trafficLightController);

const startButton: Element = document.querySelector('#startButton');
const stopButton: Element = document.querySelector('#stopButton');

let simulationTimer;

startButton.addEventListener('click', () => {
    simulationTimer = setTimeout(() => {
       stateMachine.destroy();
    }, PERIOD.SIMULATION);
    stateMachine.init();
});

stopButton.addEventListener('click', () => {
    clearTimeout(simulationTimer);
    stateMachine.destroy();
});
