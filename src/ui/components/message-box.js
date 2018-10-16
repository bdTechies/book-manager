import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { CustomGrid, CustomTypography, EmojiContainer } from '../base-kits';

const MessageBox = props => (
  <Grid item xs={12}>
    <CustomGrid
      container
      direction="column"
      alignItems="center"
      justify="center"
      customheight="calc(100vh - 82px)"
    >
      <Typography variant="h4">
        <EmojiContainer>{props.emoji}</EmojiContainer>
      </Typography>
      <CustomTypography mt={12} color="primary" variant="subtitle1">
        {props.message}
      </CustomTypography>
    </CustomGrid>
  </Grid>
);

export default MessageBox;
