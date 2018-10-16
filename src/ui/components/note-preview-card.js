import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import htmlToText from 'html-to-text';
import { Grid, Typography, Button } from '@material-ui/core';
import { PaddedPaper, InfoCaption } from '../base-kits';

class NotePreviewCard extends Component {
  singleBookLink = itemProps => (
    <Link to={'/books/' + this.props._id} {...itemProps} />
  );

  generateTextFromHtml(htmlInput) {
    let text = htmlToText.fromString(htmlInput, {
      uppercaseHeadings: false,
    });
    if (text.length > 180) {
      text = `${text.substring(0, 180)}...`;
    }
    return text;
  }

  render() {
    return (
      <Grid item xs={6}>
        <PaddedPaper square minheight="220">
          <Grid container direction="row">
            <Grid item xs={12}>
              <Typography variant="h5" color="primary">
                {this.props.title}
              </Typography>
              <Typography variant="h6" gutterBottom color="primary">
                {this.props.author}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <InfoCaption>Note: </InfoCaption>
                {this.generateTextFromHtml(this.props.note)}
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
