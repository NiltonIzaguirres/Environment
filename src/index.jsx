import React from 'react';
import ReactDOM from 'react-dom';

import Colors from './styles/settings/Colors';
import Reset from './styles/Reset';
import Animations from './styles/Animations.js';
import Routes from './Routes.js';

ReactDOM.render(
  <React.StrictMode>
    <Colors />
    <Reset />
    <Animations />

    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);