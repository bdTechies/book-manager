import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Grid, Typography, Button } from '@material-ui/core';
import {
  PaddedPaper,
  ImageThumbContainer,
  InfoCaption,
  Image,
} from '../base-kits';
import bmPlaceholderImage from '../../assets/img/bm-image-placeholder.svg';

class BookPreviewCard extends Component {
  singleBookLink = itemProps => (
    <Link to={'/books/' + this.props._id} {...itemProps} />
  );

  render() {
    const {
      coverImage,
      title,
      author,
      description,
      readingStatus,
    } = this.props;

    const generateSummary = function(text, maxLength) {
      return text.length > maxLength
        ? `${text.substring(0, maxLength)}...`
        : text;
    };

    const generateReadingStatus = function(status) {
      switch (status) {
        case 'completed':
          return 'Completed';
        case 'reading':
          return 'Reading';
        default:
          return 'Not Started';
      }
    };

    return (
      <Grid item xs={6}>
        <PaddedPaper square minheight="320">
          <Grid container direction="row">
            <Grid item xs={6} lg={5}>
              <ImageThumbContainer>
                <Image
                  src={coverImage ? coverImage : bmPlaceholderImage}
                  width={coverImage ? '' : 100}
                />
              </ImageThumbContainer>
            </Grid>
            <Grid item xs={6} lg={7}>
              <Typography variant="h5" color="primary">
                {generateSummary(title, 30)}
              </Typography>
              <Typography variant="h6" gutterBottom color="primary">
                {author}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <InfoCaption>Description: </InfoCaption>
                {generateSummary(description, 120)}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <InfoCaption>Reading Status: </InfoCaption>
                {generateReadingStatus(readingStatus)}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="small"
                component={this.singleBookLink}
              >
                Full Info
              </Button>
            </Grid>
          </Grid>
        </PaddedPaper>
      </Grid>
    );
  }
}

BookPreviewCard.propTypes = {
  coverImage: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  readingStatus: PropTypes.string,
};

export default BookPreviewCard;
