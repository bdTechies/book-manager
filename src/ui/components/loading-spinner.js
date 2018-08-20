import React from 'react';
import Spinner from 'react-spinkit';
import { Grid } from '@material-ui/core';
import { CustomGrid } from '../base-kits';

const LoadingSpinner = props => (
  <Grid item xs={12}>
    <CustomGrid
      container
      direction="column"
      alignItems="center"
      justify="center"
      customheight="calc(100vh - 82px)"
    >
      <Spinner name="ball-scale-multiple" color="#5b1f7c" />
    </CustomGrid>
  </Grid>
);

export default LoadingSpinner;
