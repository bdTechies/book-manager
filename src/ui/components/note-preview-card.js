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

class NotePreviewCard extends Component {
  singleBookLink = itemProps => (
    <Link to={'/books/' + this.props._id} {...itemProps} />
  );

  render() {
    return (
      <Grid item xs={6}>
        <PaddedPaper square minheight="332">
          <Grid container direction="row">
            <Grid item xs={12} lg={7}>
              <Typography variant="headline" color="primary">
                {this.props.title}
              </Typography>
              <Typography variant="title" gutterBottom color="primary">
                {this.props.author}
              </Typography>
              <Typography variant="body2" gutterBottom>
                <InfoCaption>Note: </InfoCaption>
                {this.props.note.length > 120
                  ? `${this.props.note.substring(0, 120)}...`
                  : this.props.note}
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

export default NotePreviewCard;
