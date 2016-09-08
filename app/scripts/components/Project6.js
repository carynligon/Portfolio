import React from 'react';
import {Link, browserHistory} from 'react-router';

import Nav from './Nav';

export default React.createClass({
  previousProject() {
    browserHistory.push('/projects/To-Do');
  },
  nextProject() {
    browserHistory.push('/projects/Bartenders-Choice');
  },
  render() {
    return (
      <main>
        <Nav/>
        <section className="project-section">
          <Link id="view-all" to="/projects">All Projects</Link>
          <div className="intro">
            <h2>Photo Albums</h2>
            <a href="https://carynligon.github.io/PhotoAlbums/" target='_blank'>View Live</a>
            <p className="project-description">This is an app that consists of different photo albums. You can view the pictures in each album as a grid or individually.</p>
          </div>
          <div className="project-images">
            <img src="/assets/images/Photo-Albums.png"/>
          </div>
          <div className="process-section">
            <h3>The Process</h3>
            <div className="process-text">
              <p className="project-process-paragraph">This was my first project using JQuery and 14 days into the Iron Yard. This app was pretty fun to build. It was one of the first projects where I felt like I had actually built sometime somewhat substantial. It was also a ton of fun just getting to personalize it as much as I wanted. I started out drawing some very simple wireframes which you can see in the next photo.</p>
              <p className="project-process-paragraph">I struggled the most with rendering content based on the location. This concept was very new to me and I got stuck a few times going from one album to another. This is another app that would be fun to go back and refactor with user accounts and more smooth actions and animations.</p>
            </div>
            <img src="/assets/images/Albums/Planning.JPG" alt="photo of wireframes"/>
          </div>
          <div className="secondary-images-p4">
            <img src="/assets/images/Albums/Albums.png" alt="photo of album view in app"/>
            <img src="/assets/images/Albums/SingleImage.png" alt="photo of single image in app"/>
          </div>
          <div className="process-text-2-p3">
            <p className="project-process-paragraph">The styling is rather cut and dry in this app, which was intentional. I wanted the focal point to be the actual images and albums, so I chose to stick with white and simple borders. Although the app is simple, I wanted it to look clean and polished. I'm really happy with how it turned out looking and working. I was pretty happy with the end result, especially with only having about a weeks worth of learning JavaScript and JQuery beforehand.</p>
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
