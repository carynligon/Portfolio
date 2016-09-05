import React from 'react';
import { Router, browserHistory, hashHistory, Route } from 'react-router';

import App from './components/App';
import About from './components/About';
import ProjectList from './components/ProjectList';
import Project1 from './components/Project1';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/about" component={About}/>
    <Route path="/projects" component={ProjectList}/>
    <Route path="/projects/Bartenders-Choice" component={Project1}/>
  </Router>
)

export default router;
