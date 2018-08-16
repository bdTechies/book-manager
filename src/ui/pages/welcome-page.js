import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import {
  WelcomeContainer,
  FullHeightGrid,
  FixedVerticalDevider,
} from '../base-kits';
import { bookActions } from '../../actions';
import { WelcomePageLogo, WelcomePageMenu } from '../components';

class WelcomePage extends Component {
  componentDidMount() {
    this.props.initMainProcessListeners();
  }

  render() {
    return (
      <WelcomeContainer>
        <Grid container>
          <Grid item sm={6}>
            <FullHeightGrid
              container
              justify="center"
              alignItems="center"
              nocopy="true"
            >
              <WelcomePageLogo />
            </FullHeightGrid>
          </Grid>
          <FixedVerticalDevider />
          <Grid item sm={6}>
            <FullHeightGrid
              container
              justify="center"
              alignItems="center"
              nocopy="true"
            >
              <WelcomePageMenu />
            </FullHeightGrid>
          </Grid>
        </Grid>
      </WelcomeContainer>
    );
  }
}

const mapActionsToProps = {
  initMainProcessListeners: bookActions.initMainProcessListeners,
};

export default connect(
  null,
  mapActionsToProps
)(WelcomePage);
