import React from 'react';

import Nav from './Nav';
import Header from './Header';
import About from './About';
import Recent from './Recent';
import FeaturedProject from './FeaturedProject';
import Contact from './Contact';

export default React.createClass({
  render() {
    return (
      <main>
        <Nav/>
        <Header/>
        <FeaturedProject/>
        <Recent/>
        <About/>
        <Contact/>
      </main>
    );
  }
});
