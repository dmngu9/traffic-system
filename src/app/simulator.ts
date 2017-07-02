import {TrafficLight} from './trafficLight';
import {StateMachine} from './stateMachine';

const northTrafficLight = new TrafficLight('north', undefined, document.querySelector('#north'));
const soutthTrafficLight = new TrafficLight('south', undefined, document.querySelector('#south'));
const eastTrafficLight = new TrafficLight('east', undefined, document.querySelector('#east'));
const westTrafficLight = new TrafficLight('west', undefined, document.querySelector('#west'));

const stateMachine = new StateMachine(northTrafficLight,
                                      soutthTrafficLight,
                                      eastTrafficLight,
                                      westTrafficLight);

const startButton: Element = document.querySelector('#startButton');
startButton.addEventListener('click', () => {
    stateMachine.init();
});

const stopButton: Element = document.querySelector('#stopButton');
stopButton.addEventListener('click', () => {
    stateMachine.destroy();
});
