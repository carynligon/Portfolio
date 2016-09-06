import React from 'react';
import {Link} from 'react-router';

import Nav from './Nav';

export default React.createClass({
  render() {
    return(
      <main>
        <Nav/>
        <ul id="project-list">
          <li>
            <Link to="/projects/Bartenders-Choice">
            <img src="/assets/images/BC/Landing.png" alt="image for Bartender's Choice app"/>
            <h4>Bartender's Choice</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
            </Link>
          </li>
          <li>
            <Link to="/projects/Bring-The-Band">
            <img src="/assets/images/bringTheBand.JPG" alt="image for Bring the Band app"/>
            <h4>Bring The Band</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
            </Link>
          </li>
          <li>
            <Link to="/projects/Confirm">
            <img src="/assets/images/Confirm/Login.png" alt="image for Confirm app"/>
            <h4>Confirm</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
            </Link>
          </li>
          <li>
            <Link to="/projects/Reactpardy">
            <img src="/assets/images/reactpardy.png" alt="image for Reactpardy app"/>
            <h4>Reactpardy</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
            </Link>
          </li>
          <li>
            <Link to="/projects/To-Do">
            <img src="/assets/images/toDo.png" alt="image for To-Do List app"/>
            <h4>To Do List</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
            </Link>
          </li>
          <li>
            <Link to="/projects/Photo-Albums">
            <img src="/assets/images/Photo-Albums.png" alt="image for Photo Album app"/>
            <h4>Photo Albums</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
            </Link>
          </li>
        </ul>
      </main>
    );
  }
});
