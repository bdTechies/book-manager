import React from 'react';
import { Grid } from '@material-ui/core';
import {
  WelcomeContainer,
  FullHeightGrid,
  FixedVerticalDevider,
} from '../base-kits';
import { WelcomePageLogo, WelcomePageMenu } from '../components';

const WelcomePage = props => (
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

export default WelcomePage;
