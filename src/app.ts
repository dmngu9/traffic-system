const appContext = require.context('./app', true, /\.ts$/);
appContext.keys().forEach(appContext);

import './assets/app.css';


