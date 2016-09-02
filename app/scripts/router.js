import React from 'react';
import { Router, useRouterHistory, Route } from 'react-router';
import { createMemoryHistory } from 'history';

import App from './components/App';
import About from './components/About';
import ProjectList from './components/ProjectList';


const appHistory = useRouterHistory(createMemoryHistory)({ queryKey: false })

const router = (
  <Router history={appHistory}>
    <Route path="/" component={App}/>
    <Route path="/about" component={About}/>
    <Route path="/projects" component={ProjectList}/>
  </Router>
)

export default router;
