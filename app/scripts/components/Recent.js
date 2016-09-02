import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
  render() {
    return (
      <main id="recent-projects-wrapper">
        <h2>Recent Work</h2>
        <ul id="project-preview-list">
          <li>
            <h3>Bartender's Choice</h3>
            <div className="project-main-image"></div>
          </li>
          <li>
            <h3>Bring the Band</h3>
            <div className="project-main-image"></div>
          </li>
          <li>
            <h3>Confirm</h3>
            <div className="project-main-image"></div>
          </li>
        </ul>
      </main>
    );
  }
});
