import React from 'react';
import {Link} from 'react-router';

import Nav from './Nav';

export default React.createClass({
  render() {
    return (
      <main>
        <Nav/>
        <section className="project-section">
          <Link id="view-all" to="/projects">All Projects</Link>
          <div className="intro">
            <h2>Confirm App</h2>
            <a href="https://carynligon.github.io/Confirm" target='_blank'>View Live</a>
            <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="project-images">
            <img src="/assets/images/Confirm/ReadModal.png"/>
          </div>
          <div className="process-section">
            <h3>The Process</h3>
          </div>
          <div className="secondary-images-p3">
            <img src="/assets/images/Confirm/Login.png" alt="photo of login component in app"/>
            <img src="/assets/images/Confirm/Docs.png" alt="photo of document reading feature in app"/>
            <img src="/assets/images/Confirm/Confirmation.png" alt="photo of confirmation of reading document of app"/>
          </div>
          <div className="process-text-2-p3">
            <p className="project-process-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p className="project-process-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="arrows-to-project">
          <Link to="/Bring-The-Band"><i className="fa fa-arrow-left" aria-hidden="true"></i></Link>
          <Link to="/Reactpardy"><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
          </div>
        </section>
      </main>
    );
  }
});
