import {TrafficLight} from '../../src/app/trafficLight';
import {TrafficLightController} from '../../src/app/trafficLightController';
import {PERIOD, SIGNAL} from '../../src/app/state';
import {StateMachine} from '../../src/app/stateMachine';

describe('state machine tests', () => {

    let trafficController: TrafficLightController,
        northTrafficLight: TrafficLight,
        eastTrafficLight: TrafficLight,
        stateMachine: StateMachine;

    function createStateMachine(): StateMachine {
        northTrafficLight = new TrafficLight('north', undefined);
        const southTrafficLight = new TrafficLight('south', undefined);
        eastTrafficLight = new TrafficLight('east', undefined);
        const westTrafficLight = new TrafficLight('west', undefined);
        trafficController = new TrafficLightController(northTrafficLight,
                                                        southTrafficLight,
                                                        eastTrafficLight,
                                                        westTrafficLight);
        return new StateMachine(trafficController);
    }

    beforeEach(() => {
        stateMachine = createStateMachine();
        jasmine.clock().install();
    });

    afterEach(() => {
        jasmine.clock().uninstall();
    });

    it('should have correct state and signal change sequence', () => {
        trafficController.changeLightSignals(stateMachine.getCurrentState().getStateSignals());

        expect(northTrafficLight.getSignal()).toBe(SIGNAL.GREEN);
        expect(eastTrafficLight.getSignal()).toBe(SIGNAL.RED);
        expect(stateMachine.getCurrentState()).toBe(stateMachine.getGreenRedState());

        stateMachine.changeState();
        jasmine.clock().tick(PERIOD.GREEN_OR_RED);
        trafficController.changeLightSignals(stateMachine.getCurrentState().getStateSignals());

        expect(northTrafficLight.getSignal()).toBe(SIGNAL.YELLOW);
        expect(eastTrafficLight.getSignal()).toBe(SIGNAL.RED);
        expect(stateMachine.getCurrentState()).toBe(stateMachine.getYellowRedState());

        stateMachine.changeState();
        jasmine.clock().tick(PERIOD.YELLOW);
        trafficController.changeLightSignals(stateMachine.getCurrentState().getStateSignals());

        expect(northTrafficLight.getSignal()).toBe(SIGNAL.RED);
        expect(eastTrafficLight.getSignal()).toBe(SIGNAL.GREEN);
        expect(stateMachine.getCurrentState()).toBe(stateMachine.getRedGreenState());

        stateMachine.changeState();
        jasmine.clock().tick(PERIOD.GREEN_OR_RED);
        trafficController.changeLightSignals(stateMachine.getCurrentState().getStateSignals());

        expect(northTrafficLight.getSignal()).toBe(SIGNAL.RED);
        expect(eastTrafficLight.getSignal()).toBe(SIGNAL.YELLOW);
        expect(stateMachine.getCurrentState()).toBe(stateMachine.getRedYellowState());

        stateMachine.changeState();
        jasmine.clock().tick(PERIOD.YELLOW);
        trafficController.changeLightSignals(stateMachine.getCurrentState().getStateSignals());

        expect(northTrafficLight.getSignal()).toBe(SIGNAL.GREEN);
        expect(eastTrafficLight.getSignal()).toBe(SIGNAL.RED);
        expect(stateMachine.getCurrentState()).toBe(stateMachine.getGreenRedState());
    });

    it('should reset all traffic lights to inactive and currentState to GreenRedState when stateMachine on destroy', () => {
        spyOn(trafficController, 'resetLightSignals');
        stateMachine.destroy();

        expect(trafficController.resetLightSignals).toHaveBeenCalled();
        expect(stateMachine.getCurrentState()).toBe(stateMachine.getGreenRedState());
    });

    it('should change state 12 times and transition to each state 3 times in 30mins', () => {
        spyOn(stateMachine, 'setState').and.callThrough();
        spyOn(stateMachine, 'getRedGreenState').and.callThrough();
        spyOn(stateMachine, 'getYellowRedState').and.callThrough();
        spyOn(stateMachine, 'getRedYellowState').and.callThrough();
        spyOn(stateMachine, 'getGreenRedState').and.callThrough();

        stateMachine.init();
        jasmine.clock().tick(PERIOD.SIMULATION);
        stateMachine.destroy();

        expect(stateMachine.setState).toHaveBeenCalledTimes(12);
        // only get state when setting state. This check make sure each state visited 3 times
        expect(stateMachine.getRedGreenState).toHaveBeenCalledTimes(3);
        expect(stateMachine.getYellowRedState).toHaveBeenCalledTimes(3);
        expect(stateMachine.getRedYellowState).toHaveBeenCalledTimes(3);
        expect(stateMachine.getGreenRedState).toHaveBeenCalledTimes(3);
    });

    it('should repeat changing state sequence and light traffic signal after setState', () => {
        spyOn(stateMachine, 'changeState');
        spyOn(trafficController, 'changeLightSignals');

        stateMachine.enableSimulation();
        stateMachine.setState(stateMachine.getCurrentState());

        expect(stateMachine.changeState).toHaveBeenCalled();
        expect(trafficController.changeLightSignals).toHaveBeenCalled();
    });
});

