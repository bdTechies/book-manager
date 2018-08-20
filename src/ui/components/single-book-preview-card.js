import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Button, Typography, IconButton } from '@material-ui/core';
import {
  Image,
  Container,
  PaddedPaper,
  InfoCaption,
  CustomButton,
  CustomTypography,
  ImageThumbContainer,
} from '../base-kits';
import { bookActions } from '../../actions';
import { PencilIcon } from 'mdi-react';
import bmPlaceholderImage from '../../assets/img/bm-image-placeholder.svg';

const EditBookLink = props => <Link {...props} />;

class SingleBookPreviewCard extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.getBookById(this.props.id);
  }

  handleDelete() {
    this.props.deleteBook(this.props.book._id);
  }

  render() {
    if (this.props.bookDeleted) {
      return <Redirect to="/all-books" />;
    }

    return (
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <PaddedPaper square>
            <Container p={16}>
              <Grid container>
                <Grid item xs={8}>
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
                        {this.props.book.publisher || 'Who Knows!'}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <InfoCaption>Author</InfoCaption>
                      <Typography variant="title" color="primary">
                        {this.props.book.author || "I don't know"}
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
                        {this.props.book.readingStatus || 'Not started'}
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
                        {this.props.book.note || 'Add a note'}
                        <IconButton aria-label="Delete" disableRipple={true}>
                          <PencilIcon size={16} />
                        </IconButton>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <Grid container spacing={16} align="right">
                    <Grid item xs={12}>
                      <ImageThumbContainer height="450" width="300">
                        <Image
                          src={
                            this.props.book.coverImage
                              ? this.props.book.coverImage
                              : bmPlaceholderImage
                          }
                          width={this.props.book.coverImage ? '' : 100}
                        />
                      </ImageThumbContainer>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Container align="right" mt={32}>
                    <CustomButton
                      variant="contained"
                      color="secondary"
                      size="small"
                      mr="16"
                      onClick={this.handleDelete}
                    >
                      Delete
                    </CustomButton>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      component={EditBookLink}
                      to={`/edit/${this.props.book._id}`}
                    >
                      Edit
                    </Button>
                  </Container>
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
    bookDeleted: state.bookReducer.bookDeleted,
  };
};

const mapActionsToProps = {
  getBookById: bookActions.getBookById,
  deleteBook: bookActions.deleteBookById,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(SingleBookPreviewCard);