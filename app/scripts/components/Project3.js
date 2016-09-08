import React from 'react';
import {Link, browserHistory} from 'react-router';

import Nav from './Nav';

export default React.createClass({
  previousProject() {
    browserHistory.push('/projects/Bring-The-Band');
  },
  nextProject() {
    browserHistory.push('/projects/Reactpardy');
  },
  render() {
    return (
      <main>
        <Nav/>
        <section className="project-section">
          <Link id="view-all" to="/projects">All Projects</Link>
          <div className="intro">
            <h2>Confirm App</h2>
            <a href="https://carynligon.github.io/Confirm" target='_blank'>View Live</a>
            <p className="project-description">This app allows you to see documents that you need to read. As soon as you mark a document as read, you will be asked to confirm that you did actually read the document.</p>
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
            <p className="project-process-paragraph">This app is very simple. The purpose of builiding it was to practice using modals and checkboxes in React. For this app, I based the state of the React component on whether or not the checkbox was checked. If the user checked a document and confirmed that they had read it, I would make a PUT request to the server to change the document from unread (the default) to read.</p>
            <p className="project-process-paragraph">I had never worked with modals before this app. By making the modal two parts - a container and the actual content, I was able to achieve a layered look, where the modal was on top of the original content. I wasn't sure how to get the modal close without an actual close button. I'd like to go back and make the modal more accessible by allowing more than one method to close it (i.e. hitting escape, clicking away, etc.).</p>
          </div>
        </section>
        <div className="arrows-to-project">
        <i className="fa fa-arrow-left" aria-hidden="true" onClick={this.previousProject}></i>
        <i className="fa fa-arrow-right" aria-hidden="true" onClick={this.nextProject}></i>
        </div>
      </main>
    );
  }
});
