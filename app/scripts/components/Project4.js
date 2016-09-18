import React from 'react';
import {Link, browserHistory} from 'react-router';

import Nav from './Nav';

export default React.createClass({
  previousProject() {
    browserHistory.push('/projects/Confirm');
  },
  nextProject() {
    browserHistory.push('/projects/To-Do');
  },
  render() {
    return (
      <main>
        <Nav/>
        <section className="project-section">
          <Link id="view-all" to="/projects">All Projects</Link>
          <div className="intro">
            <h2>Reactpardy</h2>
            <a href="http://colossal-effect.surge.sh/" target='_blank'>View Live</a>
            <p className="project-description">This is a Jeopardy-style app built using React.</p>
          </div>
          <div className="project-images">
            <img src="/assets/images/reactpardy.png"/>
          </div>
          <div className="process-section">
            <h3>The Process</h3>
            <div className="process-text">
              <p className="project-process-paragraph">This was our first long project using React and, honestly, I had a hard time with it. Working with the <a href="http://jservice.io/" target='_blank'>jService API</a> to get Jeopardy questions was very tricky for me. I initially started out fetching 6 random categories each time the user started a new game. I had to backtrack and stick with 6 stagnant categories so I could get the data populate properly in the gameboard.</p>
              <p className="project-process-paragraph">There was an overwhelming number of ways I could have organized my data for this project, which may have thrown me off in the first place. Once I was able to figure out how to get the categories I wanted and then the questions based on their monetary value, I was able to make the game.</p>
            </div>
            <img src="/assets/images/Reactpardy/Planning.JPG" alt="photo of wireframes"/>
          </div>
          <div className="secondary-images-p4">
            <img src="/assets/images/Reactpardy/Login.png" alt="photo of artist modal feature in app"/>
            <img src="/assets/images/Reactpardy/Modal.png" alt="photo of search results in app"/>
          </div>
          <div className="process-text-2">
            <p className="project-process-paragraph">From there it was relatively smooth sailing. I was able to validate answers and adjust your total money earned after you answered each question. The weekend started to make a turn for the better once I got the organization figured out. It was a lot of fun working on the scoring and styling for the game.</p>
            <p className="project-process-paragraph">Overall, this project was definitely the toughest weekend assignment for sure. I'd love to go back and recrete this app from scratch. I think I let this app get to me a bit too much. I feel confident that I could make this app now...stay tuned for Reactpardy 2.0!</p>
          </div>
          <img className="secondary-process-image" src="/assets/images/Reactpardy/jService.png" alt="logo of API used, jService"/>
        </section>
        <div className="arrows-to-project">
        <i className="fa fa-arrow-left" aria-hidden="true" onClick={this.previousProject}></i>
        <i className="fa fa-arrow-right" aria-hidden="true" onClick={this.nextProject}></i>
        </div>
      </main>
    );
  }
});
