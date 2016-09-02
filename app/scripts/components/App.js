import React from 'react';

import Nav from './Nav';
import Header from './Header';
import About from './About';
import Recent from './Recent';

export default React.createClass({
  render() {
    return (
      <main>
        <Nav/>
        <Header/>
        <About/>
        <Recent/>
      </main>
    );
  }
});
