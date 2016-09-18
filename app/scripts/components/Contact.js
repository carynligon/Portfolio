import $ from 'jquery';
import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      name: false,
      email: false,
      message: false,
      messageSent: false
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
  sendEmail(e) {
    e.preventDefault();
    $.ajax({
      url: `https://baas.kinvey.com/rpc/kid_ByiP3Qqs/custom/emails`,
      type: 'POST',
      data: {
        myEmail: 'hello@carynligon.com',
        senderEmail: this.refs.email.value,
        message: this.refs.message.value
      }
    });
    this.setState({messageSent: true});
  },
  render() {
    let nameLabel;
    let emailLabel;
    let messageLabel;
    let content;
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
    if (this.state.messageSent) {
      content = <div className="message-sent"><p>Thank you! I'll be in touch as soon as possible!</p></div>
    } else {
      content = <form className="contact-form" onSubmit={this.sendEmail}>
        <h2>Let's talk!</h2>
        <label htmlFor="name" style={nameLabel}>Name</label>
        <input type="text" name="name" id="name" onKeyUp={this.showName} placeholder="Name" ref="name" required/>
        <label htmlFor="email" style={emailLabel}>Email</label>
        <input type="email" name="email" id="email" onKeyUp={this.showEmail} placeholder="Email" ref="email" required/>
        <label htmlFor="message" style={messageLabel}>Message</label>
        <textarea name="message" id="message" onKeyUp={this.showMessage} placeholder="Message" ref="message" required/>

        <button type="submit">Send</button>
      </form>
    }
    return (
      <a id="contact-section">
      <section id="contact-section" name="contact-section">
        {content}
        <p>hello@carynligon.com</p>
        <div className="contact-links">
          <a href="https://github.com/carynligon" target='_blank'><i className="fa fa-github" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/in/caryn-ligon-01731444" target='_blank'><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
          <a href="https://twitter.com/CarynLigon" target='_blank'><i className="fa fa-twitter" aria-hidden="true"></i></a>
          <a href="https://medium.com/@CarynLigon" target='_blank'><i className="fa fa-medium" aria-hidden="true"></i></a>
        </div>
      </section>
      </a>
    );
  }
});
