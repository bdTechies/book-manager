import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WelcomeLayout } from '../layouts';
import { appControlActions } from '../../actions';

class WelcomePage extends Component {
  render() {
    return <WelcomeLayout {...this.props} />;
  }
}

const mapStateToProps = state => ({});
const mapActionsToProps = {
  onExitApp: appControlActions.exitApp,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(WelcomePage);
