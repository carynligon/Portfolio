import React from 'react';
import { Router, useRouterHistory, Route } from 'react-router';
import { createMemoryHistory } from 'history';

import App from './components/App';
import About from './components/About';


const appHistory = useRouterHistory(createMemoryHistory)({ queryKey: false })

const router = (
  <Router history={appHistory}>
    <Route path="/" component={App}/>
    <Route path="/about" component={About}/>
  </Router>
)

export default router;
