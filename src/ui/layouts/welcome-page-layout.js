import React from 'react';
import { Grid } from '@material-ui/core';
import {
  WelcomeContainer,
  FullHeightGrid,
  FixedVerticalDevider,
} from '../base-kits';
import { WelcomePageMenu, WelcomePageLogo } from '../components';

const WelcomeLayout = props => (
  <WelcomeContainer>
    <Grid container>
      <Grid item sm={6}>
        <FullHeightGrid container justify="center" alignItems="center" noCopy>
          <WelcomePageLogo />
        </FullHeightGrid>
      </Grid>
      <FixedVerticalDevider />
      <Grid item sm={6} justify="center">
        <FullHeightGrid container justify="center" alignItems="center" noCopy>
          <WelcomePageMenu onExitApp={props.onExitApp} />
        </FullHeightGrid>
      </Grid>
    </Grid>
  </WelcomeContainer>
);

export default WelcomeLayout;
