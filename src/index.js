import React from 'react';
import ReactDOM from 'react-dom';

import Colors from './assets/styles/settings/Colors';
import Reset from './assets/styles/Reset';
import Animations from './assets/styles/Animations.js';
import Routes from './routes.js';

ReactDOM.render(
  <React.StrictMode>
    <Colors />
    <Reset />
    <Animations />

    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);