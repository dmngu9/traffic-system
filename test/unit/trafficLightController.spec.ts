import {TrafficLight} from '../../src/app/trafficLight';
import {TrafficLightController} from '../../src/app/trafficLightController';
import {SIGNAL} from '../../src/app/state';

describe('trafficLight and trafficLightController tests', () => {

    let trafficController: TrafficLightController,
        northTrafficLight: TrafficLight;

    function createTrafficLightController(): TrafficLightController {
        northTrafficLight = new TrafficLight('north', undefined);
        const southTrafficLight = new TrafficLight('south', undefined);
        const eastTrafficLight = new TrafficLight('east', undefined);
        const westTrafficLight = new TrafficLight('west', undefined);
        return new TrafficLightController(northTrafficLight,
                                          southTrafficLight,
                                          eastTrafficLight,
                                          westTrafficLight);
    }

    beforeEach(() => {
        trafficController = createTrafficLightController();
    });

    it('should have trafficLightController be able to change signal of trafficLights', () => {
        const mockStateSignals = {
            NORTH_SOUTH: 'mockNorthSouth',
            EAST_WEST: 'mockEastWest'
        };
        spyOn(northTrafficLight, 'setSignal').and.callThrough();

        trafficController.changeLightSignals(mockStateSignals);

        expect(northTrafficLight.setSignal).toHaveBeenCalledWith(mockStateSignals.NORTH_SOUTH);
        expect(northTrafficLight.getSignal()).toBe(mockStateSignals.NORTH_SOUTH);
    });

    it('should have trafficLightController be able to reset signal of trafficLight to inactive state', () => {
        spyOn(northTrafficLight, 'setSignal').and.callThrough();

        trafficController.resetLightSignals();

        expect(northTrafficLight.setSignal).toHaveBeenCalledWith(SIGNAL.INACTIVE);
        expect(northTrafficLight.getSignal()).toBe(SIGNAL.INACTIVE);
    });
});
