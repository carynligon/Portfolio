import React from 'react';
import {Router, Route, hashHistory} from 'react-router';

import App from './components/App';
import About from './components/About';

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/about" component={About}/>
  </Router>
)

export default router;
