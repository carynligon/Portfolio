import React from 'react';
import {Link} from 'react-router';

const Nav = React.createClass({
  render: function() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        Projects
        Contact
      </nav>
    );
  }
});

export default Nav;
