import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core';
import {
  PaddedPaper,
  ImageThumbContainer,
  InfoCaption,
  Image,
} from '../base-kits';
import bmPlaceholderImage from '../../assets/img/bm-image-placeholder.svg';
import bookCover from '../../assets/img/a-tale-of-two-cities.jpeg';

const SingleBookLink = props => <Link to="/about" {...props} />;

const BookPreviewCard = props => (
  <Grid item xs={6}>
    <PaddedPaper square minheight="332">
      <Grid container direction="row">
        <Grid item xs={6} lg={5}>
          <ImageThumbContainer>
            <Image
              src={props.bookCover ? bookCover : bmPlaceholderImage}
              width={props.bookCover ? '' : 100}
            />
          </ImageThumbContainer>
        </Grid>
        <Grid item xs={6} lg={7}>
          <Typography variant="headline" color="primary">
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
          <Button
            variant="contained"
            color="primary"
            size="small"
            component={SingleBookLink}
          >
            Full Info
          </Button>
        </Grid>
      </Grid>
    </PaddedPaper>
  </Grid>
);

export default BookPreviewCard;
