import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Grid, Typography, Button } from '@material-ui/core';
import {
  PaddedPaper,
  ImageThumbContainer,
  InfoCaption,
  Image,
} from '../base-kits';
import bmPlaceholderImage from '../../assets/img/bm-image-placeholder.svg';

class BookPreviewCard extends Component {
  render() {
    const {
      coverImage,
      title,
      author,
      description,
      readingStatus,
      t,
    } = this.props;

    const generateSummary = function(text, maxLength) {
      return text.length > maxLength
        ? `${text.substring(0, maxLength)}...`
        : text;
    };

    const generateReadingStatus = function(status) {
      switch (status) {
        case 'completed':
          return t('readingStatus.completed');
        case 'reading':
          return t('readingStatus.reading');
        default:
          return t('readingStatus.default');
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
                <InfoCaption>{t('bookPreviewCard.description')}: </InfoCaption>
                {generateSummary(description, 120)}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <InfoCaption>
                  {t('bookPreviewCard.readingStatus')}:{' '}
                </InfoCaption>
                {generateReadingStatus(readingStatus)}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="small"
                component={Link}
                to={'/books/' + this.props._id}
              >
                {t('bookPreviewCard.fullInfo')}
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

export default withTranslation('translation', { withRef: true })(
  BookPreviewCard
);
