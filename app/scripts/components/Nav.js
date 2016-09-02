import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/">Projects</Link>
        <Link to="/">Contact</Link>
      </nav>
    );
  }
});
