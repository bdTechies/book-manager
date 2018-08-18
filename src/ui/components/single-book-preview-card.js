import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Button, Typography } from '@material-ui/core';
import {
  Image,
  Container,
  PaddedPaper,
  InfoCaption,
  CustomTypography,
  ImageThumbContainer,
} from '../base-kits';
import { bookActions } from '../../actions';
import bmPlaceholderImage from '../../assets/img/bm-image-placeholder.svg';

class SingleBookPreviewCard extends Component {
  componentDidMount() {
    this.props.getBookById(this.props.id);
  }

  render() {
    console.log(this.props.id);
    console.log(this.props.book);
    return (
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <PaddedPaper square>
            <Container p={16}>
              <Grid container>
                <Grid item xs={9}>
                  <Grid container spacing={16}>
                    <Grid item xs={6}>
                      <InfoCaption>Title</InfoCaption>
                      <Typography variant="title" color="primary">
                        {this.props.book.title || 'Book title not found'}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <InfoCaption>Publisher</InfoCaption>
                      <Typography variant="title" color="primary">
                        {this.props.book.publisher || 'A Tale of Two Cities'}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <InfoCaption>Author</InfoCaption>
                      <Typography variant="title" color="primary">
                        {this.props.book.author || 'A Tale of Two Cities'}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <InfoCaption>Categories</InfoCaption>
                      <Typography variant="title" color="primary">
                        {this.props.book.translator || 'A Tale of Two Cities'}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <InfoCaption>Translator</InfoCaption>
                      <Typography variant="title" color="primary">
                        {this.props.book.translator || 'A Tale of Two Cities'}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <InfoCaption>Reading Status</InfoCaption>
                      <Typography variant="title" color="primary">
                        {this.props.book.readingStatus || 'Completed'}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <InfoCaption>Description</InfoCaption>
                      <CustomTypography variant="body2" whitespace="pre-line">
                        {this.props.book.description}
                      </CustomTypography>
                    </Grid>
                    <Grid item xs={12}>
                      <InfoCaption>Note</InfoCaption>
                      <Typography variant="body2">
                        {this.props.book.note}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Grid container spacing={16}>
                    <Grid item xs={12}>
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
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </PaddedPaper>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    book: state.bookReducer.singleBook,
  };
};

const mapActionsToProps = {
  getBookById: bookActions.getBookById,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(SingleBookPreviewCard);
