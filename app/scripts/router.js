import React from 'react';
import { Router, browserHistory, hashHistory, Route } from 'react-router';

import App from './components/App';
import About from './components/About';
import ProjectList from './components/ProjectList';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Project4 from './components/Project4';
import Project5 from './components/Project5';
import Project6 from './components/Project6';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/about" component={About}/>
    <Route path="/projects" component={ProjectList}/>
    <Route path="/projects/Bartenders-Choice" component={Project1}/>
    <Route path="/projects/Bring-The-Band" component={Project2}/>
    <Route path="/projects/Confirm" component={Project3}/>
    <Route path="/projects/Reactpardy" component={Project4}/>
    <Route path="/projects/To-Do" component={Project5}/>
    <Route path="/projects/Photo-Albums" component={Project6}/>
  </Router>
)

export default router;
