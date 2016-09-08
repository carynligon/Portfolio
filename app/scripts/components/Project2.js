import React from 'react';
import {Link, browserHistory} from 'react-router';

import Nav from './Nav';

export default React.createClass({
  previousProject() {
    browserHistory.push('/projects/Bartenders-Choice');
  },
  nextProject() {
    browserHistory.push('/projects/Confirm');
  },
  render() {
    return (
      <main>
        <Nav/>
        <section className="project-section">
          <Link id="view-all" to="/projects">All Projects</Link>
          <div className="intro">
            <h2>Bring The Band</h2>
            <a href="https://carynligon.github.io/BringTheBand" target='_blank'>View Live</a>
            <p className="project-description">Bring the Band is an app for a hypothetical local music venue that allows users to vote for artists they'd like to see at the venue. They can search for any artist available on Spotify.</p>
          </div>
          <div className="project-images">
            <img src="/assets/images/BTB/Landing.png"/>
          </div>
          <div className="process-section">
            <h3>The Process</h3>
            <div className="process-text">
              <p className="project-process-paragraph">I had worked with a couple different API's by the time I started building this app. I was definitely still a beginner, but I was starting to get the hang of it. Using the <a href="https://developer.spotify.com/web-api/" target='_blank'>Spotify API</a> for this app was great. Their docs are really easy to understand. I was getting the data I needed in a matter of minutes using <a href="https://www.getpostman.com/" target='_blank'>Postman</a>.</p>
              <p className="project-process-paragraph">I used Backbone for all of my data collections and models. I then used a custom function on my collection to fetch data from the Spotify API based on a query parameter that I got from an input element where users could search for artists' names. I decided to go with this structure so that everytime a search was performed, I had a collection of curated artist models based on what the user had searched.</p>
            </div>
            <img src="/assets/images/BTB/TestEx.png" alt="photo of testing code sample"/>
          </div>
          <div className="secondary-images-p2">
            <img src="/assets/images/BTB/Modal.png" alt="photo of artist modal feature in app"/>
            <img src="/assets/images/BTB/Results.png" alt="photo of search results in app"/>
          </div>
          <div className="process-text-2">
            <p className="project-process-paragraph">The most difficult part of this project was the actual voting feature. I eventually decided to create a new Backbone and <a href="https://www.kinvey.com/" target='_blank'>Kinvey</a> collection just for artists that had been voted for. In order to tell who had voted for each band and how many votes each one had, I added a voters arrau as a key on model (each artist that had been voted for) in that collection.</p>
            <p className="project-process-paragraph">Another tricky but very cool thing I did for this project was create an anonymous login. This was my first time trying to figure that out. I basically created a "fake" user which would be automatically signed in if the user did not sign up or log in themselves. This allowed them to view all of the data. However, I made it so that when a user tried to vote for an artist, if the session was an anonymous session, they wouldn't be able to.</p>
          </div>
          <a href="https://developer.spotify.com/web-api/" target='_blank'><img className="secondary-process-image" src="/assets/images/BTB/Spotify_Logo.png" alt="logo of API used, Spotify"/></a>
        </section>
        <div className="arrows-to-project">
        <i className="fa fa-arrow-left" aria-hidden="true" onClick={this.previousProject}></i>
        <i className="fa fa-arrow-right" aria-hidden="true" onClick={this.nextProject}></i>
        </div>
      </main>
    );
  }
});
