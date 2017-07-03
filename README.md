# traffic-system
SafetyCulture take home assignment - implementing traffic light intersection simulation

## Requirements
Simulation time is 30 mins
Light change from Green to Red or vice versa takes 5 mins. Prior turning Red, The light should display Yellow for 30 seconds

## How to Start
To build project, run npm start. Open the index.html in browser

To run unit tests, run npm test

To check typescript linting, run npm run checkLinting

## Design
There 4 traffic lights at positions: North, South, East, West. North & South traffic lights follow the same pattern and so do East & West traffic lights. I indentify 4 possible state as shown in the diagram below.

![state](https://user-images.githubusercontent.com/12367690/27774307-4e561930-5fd3-11e7-999e-897a26a766b0.PNG)

The design that i came up with is displayed in the UML graph below.

![uml](https://user-images.githubusercontent.com/12367690/27774212-cadbdc18-5fd0-11e7-8c33-9ccd444253e9.PNG)

In the design, the state name follows this rule: signal of N/S traffic light combined with E/W traffic light signal. For example GreenRedState (N/S is Green and E/W is Red).

I made an assumption that the state change cycle always start at GreenRedState. When simulation finished, it will reset back to that state.

## Things that I have not done properly
Karma source map is not configured correctly. No line number shows for what expect statement fails in the test.

Using Webpack for small project is overkill. I need ts-loader in order to load CommonJs to browser. Other option is to use Browserify but Im not familiar with it.

TrafficLight class takes UI Element and anything relate to UI Element is not tested in unit tests. I feel like this is more like e2e tests.
