import {TrafficLight} from './trafficLight';
import {StateMachine} from './stateMachine';

const northTrafficLightElement: Element = document.querySelector('#north');
const southTrafficLightElement: Element = document.querySelector('#south');
const eastTrafficLightElement: Element = document.querySelector('#east');
const westTrafficLightElement: Element = document.querySelector('#west');

const northTrafficLight = new TrafficLight('north', undefined, northTrafficLightElement);
const soutthTrafficLight = new TrafficLight('south', undefined, southTrafficLightElement);
const eastTrafficLight = new TrafficLight('east', undefined, eastTrafficLightElement);
const westTrafficLight = new TrafficLight('west', undefined, westTrafficLightElement);

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
