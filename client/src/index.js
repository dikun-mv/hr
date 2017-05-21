import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import ControlPanel from './modules/control-panel';
import Portal from './modules/portal';

render((
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Portal}/>
      <Route path="/control-panel" component={ControlPanel}/>
    </Switch>
  </BrowserRouter>
), document.getElementById('root'));
