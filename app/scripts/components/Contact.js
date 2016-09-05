import React from 'react';

export default React.createClass({
  render() {
    return (
      <section id="contact-section">
        <form className="contact-form" action="mailto:hello@carynligon.com" method="post" encType="text/plain">
          <h2>Let's talk!</h2>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Name"/>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Email"/>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" placeholder="Hi nice to meet you!"/>

          <input type="submit" value="Send"/>
          <input type="reset" value="Reset"/>
        </form>
      </section>
    );
  }
});
