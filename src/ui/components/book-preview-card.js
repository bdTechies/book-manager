import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    return (
      <Grid item xs={6}>
        <PaddedPaper square minheight="332">
          <Grid container direction="row">
            <Grid item xs={6} lg={5}>
              <ImageThumbContainer>
                <Image
                  src={
                    this.props.coverImage
                      ? this.props.coverImage
                      : bmPlaceholderImage
                  }
                  width={this.props.coverImage ? '' : 100}
                />
              </ImageThumbContainer>
            </Grid>
            <Grid item xs={6} lg={7}>
              <Typography variant="headline" color="primary">
                {this.props.title}
              </Typography>
              <Typography variant="title" gutterBottom color="primary">
                {this.props.author}
              </Typography>
              <Typography variant="body2" gutterBottom>
                <InfoCaption>Description: </InfoCaption>
                {this.props.description.length > 120
                  ? `${this.props.description.substring(0, 120)}...`
                  : this.props.description}
              </Typography>
              <Typography variant="body2" gutterBottom>
                <InfoCaption>Publisher: </InfoCaption>
                {this.props.publisher}
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

export default BookPreviewCard;
