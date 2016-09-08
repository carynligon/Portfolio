import React from 'react';
import {Link, browserHistory} from 'react-router';

import Nav from './Nav';

export default React.createClass({
  previousProject() {
    browserHistory.push('/projects/Reactpardy');
  },
  nextProject() {
    browserHistory.push('/projects/Photo-Albums');
  },
  render() {
    return (
      <main>
        <Nav/>
        <section className="project-section">
          <Link id="view-all" to="/projects">All Projects</Link>
          <div className="intro">
            <h2>To Do List</h2>
            <a href="https://carynligon.github.io/ToDo" target='_blank'>View Live</a>
            <p className="project-description">Always forgetting what to do? Never again with a brand new to-do list app that lets you make your own to-do's!</p>
          </div>
          <div className="project-images">
            <img src="/assets/images/toDo.png"/>
          </div>
          <div className="process-section">
            <h3>The Process</h3>
            <div className="process-text">
              <p className="project-process-paragraph">Looking back on this app, it is so simple - but I love it...maybe just for my geeky love for to-do lists. This was one of my first projects using an actual server. We just used a server our instructor built on heroku for us to store our data. Making GET and PUT and POST requests for this project was very foreign to me.</p>
              <p className="project-process-paragraph">I struggled the most with getting the right tasks to render on each view (Done, To Do, and All). I wanted the users to be able to toggle the content based on which tasks they wanted to see. I also wanted to make sure that they knew which tasks on the "All" view were completed and not completed.</p>
            </div>
            <img src="/assets/images/ToDo/Planning.JPG" alt="photo of wireframes and user stories"/>
          </div>
          <div className="secondary-images-p5">
            <img src="/assets/images/ToDo/List.png" alt="photo of all tasks in app"/>
          </div>
          <div className="process-text-2-p3">
            <p className="project-process-paragraph">At this point in my journey of learning programming, I knew nothing of authentication. So, this app is a to-do list filled with everyone's to-do's (anyone who uses the app). I think it would be fun to go back and jazz this app up by making it more practical and having users create accounts to make their own lists.</p>
            <p className="project-process-paragraph">I had a lot of fun styling this app. I am an avid <a href="https://www.wunderlist.com/" target='_blank'>Wunderlist</a> (an awesome list app) user and I really love their simplistic style. I wanted mine to be minimalistic but also fun, so I played around with the colors and some very minor animations on the input element when adding new tasks.</p>
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
