import React, { Component } from 'react';
import { WelcomeLayout } from '../layouts';

class WelcomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <WelcomeLayout {...this.props} />;
  }
}

export default WelcomePage;
