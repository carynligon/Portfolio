import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
  render() {
    return (
      <nav>
        <a href="/#home">Home</a>
        <Link to="/projects">Projects</Link>
        <a href="/#contact-section">Contact</a>
        <a href="https://www.dropbox.com/s/kgticz2fznqqf30/CLigon-Resume-Color.pdf?dl=0" target='_blank'>Resume</a>
      </nav>
    );
  }
});
