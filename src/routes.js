import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import App from './App';
import Problems from './pages/Problems';
import Comparative from './pages/Comparative';

function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/problems' component={Problems} />
        <Route path='/comparative' component={Comparative} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;