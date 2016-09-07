import React from 'react';
import {Link, browserHistory} from 'react-router';

import Nav from './Nav';

export default React.createClass({
  previousProject() {
    browserHistory.push('/projects/Photo-Albums');
  },
  nextProject() {
    browserHistory.push('/projects/Bring-The-Band');
  },
  render() {
    return (
      <main>
        <Nav/>
        <section className="project-section">
          <Link id="view-all" to="/projects">All Projects</Link>
          <div className="intro">
            <h2>Bartender's Choice</h2>
            <a href="https://bartenders-choice.surge.sh" target='_blank'>View Live</a>
            <p className="project-description">Getting into mixology can be really daunting. You never know what drink to make or quite how to make it. With Bartender's Choice, you can rely on data from your own personality to make a personalized drink recommendation and then learn how to make it!</p>
          </div>
          <div className="project-images">
            <img src="/assets/images/BC/Landing.png"/>
          </div>
          <div className="process-section">
            <h3>The Process</h3>
            <div className="process-text">
              <p className="project-process-paragraph">I wanted to build this app months ago...before I knew how to build apps. Mixology is so interesting to me and sort of a hobby in my home. The trickiest part for me is typically just finding a drink to make. I'm really excited that I can casually use something I built to make this part a little easier. I kept track of my progress and set miniature deadlines for myself using Trello boards for this project.</p>
              <p className="project-process-paragraph">Before I started on anything else, I shopped around for a personality API. I must have tried 5-10 different API's before settling on Traitify (I'll explain that more later). Next, I focused on data - Parsing data that came back from the API and modeling data to send up to my server on <a href="https://www.kinvey.com/">Kinvey</a>. I really wanted to make sure I had a solid understanding of the data I was working with before moving any further in the project.</p>
            </div>
            <img src="/assets/images/BC/Wireframes.JPG" alt="photo of wireframes"/>
          </div>
          <div className="secondary-images">
            <img src="/assets/images/BC/Assessment.png" alt="photo of assessment feature in app"/>
            <img src="/assets/images/BC/Dashboard.png" alt="photo of user dashboard feature in app"/>
            <img src="/assets/images/BC/Mobile.png" alt="photo of mobile version of app"/>
          </div>
          <div className="process-text-2">
            <p className="project-process-paragraph">This was the first time I had ever written server-side business logic using node.js. I set up a proxy server in Kinvey in order to make indirect, secure requests to the Traitify API. I didn't have any prior experience with node.js and I just tinkered with it until I got my AJAX requests up and running. This was definitely one of the most challenging parts of this project but also the most rewarding. I was really proud of myself for figuring this out.</p>
            <p className="project-process-paragraph">I haven't talked about styling until now, which is much like how I approached styling for this app. I tried so hard to avoid stylesheets until I got the functionality nailed down for a minimum viable product. This was really great for me. I wasn't distracted by misaligned divs or clashing colors until I had the headspace to do so. I did eventually start to focus on styles and took a more minimalistic approach. I wanted the app to be easy to use and clean. This project was a lot of fun. It's even more fun watching people take the assessment and get really excited about their personal drink recommendation.</p>
          </div>
          <img className="secondary-process-image" src="/assets/images/BC/traitify_logo.png" alt="logo of personality API company, Traitify"/>
        </section>
        <div className="arrows-to-project">
        <i className="fa fa-arrow-left" aria-hidden="true" onClick={this.previousProject}></i>
        <i className="fa fa-arrow-right" aria-hidden="true" onClick={this.nextProject}></i>
        </div>
      </main>
    );
  }
});
