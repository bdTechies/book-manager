import React, { Component } from 'react';
import { WelcomeLayout } from '../layouts';

class Welcome extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <WelcomeLayout {...this.props} />;
  }
}

export default Welcome;
