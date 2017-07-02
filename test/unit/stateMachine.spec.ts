import {TrafficLight} from '../../src/app/trafficLight';
import {TrafficLightController} from '../../src/app/trafficLightController';
import {PERIOD, SIGNAL} from '../../src/app/state';
import {StateMachine} from '../../src/app/stateMachine';

describe('trafficLight and trafficLightController tests', () => {

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
        expect(stateMachine.getCurrentState()).toBe(stateMachine.getGreenRedState());

        stateMachine.changeState();
        jasmine.clock().tick(PERIOD.GREEN_OR_RED);
        expect(stateMachine.getCurrentState()).toBe(stateMachine.getYellowRedState());

        stateMachine.changeState();
        jasmine.clock().tick(PERIOD.YELLOW);
        expect(stateMachine.getCurrentState()).toBe(stateMachine.getRedGreenState());

        stateMachine.changeState();
        jasmine.clock().tick(PERIOD.GREEN_OR_RED);
        expect(stateMachine.getCurrentState()).toBe(stateMachine.getRedYellowState());

        stateMachine.changeState();
        jasmine.clock().tick(PERIOD.YELLOW);
        expect(stateMachine.getCurrentState()).toBe(stateMachine.getGreenRedState());
    });

    it('should reset all traffic lights to inactive and currentState to GreenRedState when stateMachine on destroy', () => {
        spyOn(trafficController, 'resetLightSignals');
        stateMachine.destroy();

        expect(trafficController.resetLightSignals).toHaveBeenCalled();
        expect(stateMachine.getCurrentState()).toBe(stateMachine.getGreenRedState());
    });
});

