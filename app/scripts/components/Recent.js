import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
  render() {
    return (
      <main id="recent-projects-wrapper">
        <h2>Recent Work</h2>
        <ul id="project-preview-list">
          <li>
            <h3>Bring the Band</h3>
            <div className="project-main-image" style={{backgroundImage: 'url(assets/images/bringTheBand.JPG)'}}>
            </div>
            <p>Music venue promotional app</p>
          </li>
          <li>
            <h3>Confirm</h3>
            <div className="project-main-image" style={{backgroundImage: 'url(assets/images/confirm.png)'}}>
            </div>
            <p>Document reader app</p>
          </li>
          <li>
            <h3>Reactpardy</h3>
            <div className="project-main-image" style={{backgroundImage: 'url(assets/images/reactpardy.png)'}}>
            </div>
            <p>Me and React meet Jeopardy</p>
          </li>
        </ul>
      </main>
    );
  }
});
