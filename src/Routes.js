import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import App from './App';
import Air from './pages/Air';
import Water from './pages/Water';

function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/air' component={Air} />
        <Route path='/water' component={Water} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;