import React, { Component } from 'react';

export class ContactComponent extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <form action="https://formspree.io/hello@carynligon.com"
      method="POST">
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="_replyto" />
        </label>
        <label>
          Message:
          <textarea name="message" />
        </label>
        <input type="submit" value="Send" />
      </form>
    )
  }
}