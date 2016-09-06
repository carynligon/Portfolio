import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
  render() {
    return (
      <main id="recent-projects-wrapper">
        <h2>Recent Work</h2>
        <ul id="project-preview-list">
          <li>
            <Link to="/projects/Bring-The-Band">
            <h3>Bring the Band</h3>
            <div className="project-main-image" style={{backgroundImage: 'url(assets/images/bringTheBand.JPG)'}}>
            </div>
            <p>Music venue promotional app</p>
            </Link>
          </li>
          <li>
            <Link to="/projects/Confirm">
            <h3>Confirm</h3>
            <div className="project-main-image" style={{backgroundImage: 'url(assets/images/Confirm/Login.png)'}}>
            </div>
            <p>Document reader app</p>
            </Link>
          </li>
          <li>
            <Link to="/projects/Reactpardy">
            <h3>Reactpardy</h3>
            <div className="project-main-image" style={{backgroundImage: 'url(assets/images/reactpardy.png)'}}>
            </div>
            <p>Me and React meet Jeopardy</p>
            </Link>
          </li>
        </ul>
      </main>
    );
  }
});
