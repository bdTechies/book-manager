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
    const { title, author, note } = this.props;

    const generateSummary = function(text, maxLength) {
      return text.length > maxLength
        ? `${text.substring(0, maxLength)}...`
        : text;
    };

    return (
      <Grid item xs={6}>
        <PaddedPaper square minheight="200">
          <Grid container direction="row">
            <Grid item xs={12}>
              <Typography variant="h5" color="primary">
                {generateSummary(title, 32)}
              </Typography>
              <Typography variant="h6" gutterBottom color="primary">
                {author}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <InfoCaption>Note: </InfoCaption>
                {this.generateTextFromHtml(note)}
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
