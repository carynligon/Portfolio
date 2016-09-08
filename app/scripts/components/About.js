import React from 'react';

import Nav from './Nav';

export default React.createClass({
  render() {
    return (
      <main id="about-wrapper">
        <h2>A bit about me:</h2>
        <div id="image" alt="image of Caryn">
        </div>
        <div id="about-paragraph-wrapper">
          <p>I am a junior front-end developer with experience building responsive, single page web applications with HTML, CSS, JavaScript, React, Backbone, AJAX, API's and JQuery. I am excited to enter the industry and to join a team where I can contribute and grow my skills. I value hard work, integrity, loyalty, and relationships. I love to learn and I thrive most when challenged.</p>
          <p>Other things I love besides development: my husband, my dog, Tina Fey, cooking, coffee, rock climbing, running, mixology. I tell bad jokes and love my family and friends more than everything because they laugh.</p>
        </div>
      </main>
    );
  }
});
