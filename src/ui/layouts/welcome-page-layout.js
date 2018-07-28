import React from 'react';
import { Grid } from '@material-ui/core';
import { WelcomeContainer, FullHeightGrid } from '../base-kits';
import { MainMenu } from '../components';

const WelcomeLayout = props => (
  <WelcomeContainer>
    <Grid container>
      <Grid item sm={6}>
        <FullHeightGrid container justify="center" alignItems="center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
            magnam nihil delectus qui sit aliquam, nemo aut reprehenderit
            repellat voluptatibus vero recusandae neque culpa suscipit debitis
            veritatis veniam temporibus laborum.
          </p>
        </FullHeightGrid>
      </Grid>
      <Grid item sm={6} justify="center">
        <FullHeightGrid container justify="center" alignItems="center">
          <MainMenu />
        </FullHeightGrid>
      </Grid>
    </Grid>
  </WelcomeContainer>
);

export default WelcomeLayout;
