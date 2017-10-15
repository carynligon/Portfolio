import React, { Component } from 'react';

export class MailIcon extends Component {
  constructor() {
    super();
    this.startAnimation = this.startAnimation.bind(this);
  }
  startAnimation() {
    this.wrapper.classList.add('start');
  }
  render() {
    return (
      <div className="mail-icon-wrapper" onClick={this.startAnimation} ref={(wrapper) => this.wrapper = wrapper}>
        <svg width="70" height="70" viewBox="0 0 115 115">
          <path stroke="#fff" strokeWidth="7" fill="none" d="m7,20h98v72H7zl44,44q5,4 10,0l44-44M7,92l36-36m26,0 36,36"/>
        </svg>
      </div>
    );
  }
}