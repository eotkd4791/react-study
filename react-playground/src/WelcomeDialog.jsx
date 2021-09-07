import React from 'react';
import FancyBorder from './FancyBorder';

export default class WelcomeDialog extends React.Component {
  render() {
    return (
      <FancyBorder color='blue'>
        <h1 className='Dialog-title'>Welcome</h1>
        <p className='Dialog-message'>Thank you for visiting our spacecraft</p>
      </FancyBorder>
    );
  }
}
