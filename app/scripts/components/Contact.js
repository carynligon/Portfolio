import $ from 'jquery';
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
  sendEmail(e) {
    e.preventDefault();
    $.ajax({
      url: `https://baas.kinvey.com/rpc/kid_ByiP3Qqs/custom/emails`,
      type: 'POST',
      data: {
        myEmail: 'hello@carynligon.com',
        senderEmail: this.refs.email.value,
        message: this.refs.message.value
      },
      success: (data) => {
        console.log(data);
      }
    });
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
      <a id="contact-section">
      <section id="contact-section" name="contact-section">
        <form className="contact-form" onSubmit={this.sendEmail}>
          <h2>Let's talk!</h2>
          <label htmlFor="name" style={nameLabel}>Name</label>
          <input type="text" name="name" id="name" onKeyUp={this.showName} placeholder="Name" ref="name" required/>
          <label htmlFor="email" style={emailLabel}>Email</label>
          <input type="email" name="email" id="email" onKeyUp={this.showEmail} placeholder="Email" ref="email" required/>
          <label htmlFor="message" style={messageLabel}>Message</label>
          <textarea name="message" id="message" onKeyUp={this.showMessage} placeholder="Message" ref="message" required/>

          <input type="submit" value="Send"/>
        </form>
      </section>
      </a>
    );
  }
});
