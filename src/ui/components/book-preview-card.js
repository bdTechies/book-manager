import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { PaddedPaper, ImageThumbContainer, InfoCaption } from '../base-kits';

const BookPreviewCard = props => (
  <Grid item xs={6}>
    <PaddedPaper square minheight="332">
      <Grid container direction="row">
        <Grid item xs={6} lg={4}>
          <ImageThumbContainer />
        </Grid>
        <Grid item xs={6} lg={8}>
          <Typography variant="headline" gutterBottom color="primary">
            A Tale of Two Cities
          </Typography>
          <Typography variant="title" gutterBottom color="primary">
            Charles Dickens
          </Typography>
          <Typography variant="body2" gutterBottom>
            <InfoCaption>Description: </InfoCaption>
            A Tale of Two Cities is a historical novel by Charles Dickens, set
            in London and Paris before and during the French Revolution.
          </Typography>
          <Typography variant="body2" gutterBottom>
            <InfoCaption>Publisher: </InfoCaption>
            Chapman & Hall
          </Typography>
          <Typography variant="body2" gutterBottom>
            <InfoCaption>Categories: </InfoCaption>
            Novel, Historical Fiction
          </Typography>
          <Typography variant="body2" gutterBottom>
            <InfoCaption>Reading Status: </InfoCaption>
            Completed
          </Typography>
        </Grid>
      </Grid>
    </PaddedPaper>
  </Grid>
);

export default BookPreviewCard;
