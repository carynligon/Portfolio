import React from 'react';

export default React.createClass({
  render() {
    return (
      <section id="featured-project-section">
        <div id="featured-project" style={{backgroundImage: 'url(assets/images/featuredImage.jpg)'}}>
          <h3>Featured Project:</h3>
          <h4>Bartender's Choice</h4>
          <p>An app that combines mixology with psychology</p>
          <p>Click to see more</p>
        </div>
      </section>
    );
  }
});
