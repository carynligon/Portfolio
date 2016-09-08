import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <a href="/#contact-section">Contact</a>
        <a href="#">Resume</a>
      </nav>
    );
  }
});
