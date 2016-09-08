import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
  render() {
    return (
      <nav>
        <a href="/#home">Home</a>
        <Link to="/projects">Projects</Link>
        <a href="/#contact-section">Contact</a>
        <a href="https://www.dropbox.com/s/mb603a94kkkrbc6/CLigon-Resume-BW.pdf?dl=0" target='_blank'>Resume</a>
      </nav>
    );
  }
});
