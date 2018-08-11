import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Container } from '../base-kits';

const MessageBox = props => (
  <Grid item xs={12}>
    <Container align="center" mt={300}>
      <Typography variant="display1">{props.emoji}</Typography>
      <Typography>{props.message}</Typography>
    </Container>
  </Grid>
);

export default MessageBox;
