import React from 'react';

import Nav from './Nav';

export default React.createClass({
  render() {
    return (
      <main>
        <Nav/>
        <section className="project-section">
          <div className="intro">
            <h2>Bartender's Choice</h2>
            <a href="https://bartenders-choice.surge.sh">View Live</a>
            <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="project-images">
            <img src="/assets/images/BC/Landing.png"/>
          </div>
          <div className="process-section">
            <h3>The Process</h3>
            <div className="process-text">
              <p className="project-process-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p className="project-process-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <img src="/assets/images/BC/Wireframes.JPG" alt="photo of wireframes"/>
          </div>
          <div className="secondary-images">
            <img src="/assets/images/BC/Assessment.png" alt="photo of assessment feature in app"/>
            <img src="/assets/images/BC/Dashboard.png" alt="photo of user dashboard feature in app"/>
            <img src="/assets/images/BC/Mobile.png" alt="photo of mobile version of app"/>
          </div>
        </section>
      </main>
    );
  }
});
