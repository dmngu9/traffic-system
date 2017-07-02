const testsContext = require.context('./unit', true, /\.spec\.ts$/);
testsContext.keys().forEach(testsContext);
