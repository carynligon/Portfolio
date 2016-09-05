import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      name: false,
      email: false,
      message: false
    }
  },
  showName(e) {
    if (e.target.value === '') {
      this.setState({name: false});
    } else {
      this.setState({name: true});
    }
  },
  showEmail(e) {
    if (e.target.value === '') {
      this.setState({email: false});
    } else {
      this.setState({email: true});
    }
  },
  showMessage(e) {
    if (e.target.value === '') {
      this.setState({message: false});
    } else {
      this.setState({message: true});
    }
  },
  render() {
    let nameLabel;
    let emailLabel;
    let messageLabel;
    let activeStyle = {
      visibility: 'visible',
      top: '0',
      color: '#6590b1',
      transition: 'all 0.2s ease-in-out'
    }
    if (this.state.name) {
      nameLabel = activeStyle;
    }
    if (this.state.email) {
      emailLabel = activeStyle;
    }
    if (this.state.message) {
      messageLabel = activeStyle;
    }
    return (
      <section id="contact-section">
        <form className="contact-form" action="mailto:hello@carynligon.com" method="post" encType="text/plain">
          <h2>Let's talk!</h2>
          <label htmlFor="name" style={nameLabel}>Name</label>
          <input type="text" name="name" id="name" onKeyUp={this.showName} placeholder="Name"/>
          <label htmlFor="email" style={emailLabel}>Email</label>
          <input type="email" name="email" id="email" onKeyUp={this.showEmail} placeholder="Email"/>
          <label htmlFor="message" style={messageLabel}>Message</label>
          <textarea name="message" id="message" onKeyUp={this.showMessage} placeholder="Message"/>

          <input type="submit" value="Send"/>
        </form>
      </section>
    );
  }
});
