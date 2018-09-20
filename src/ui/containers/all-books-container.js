import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { bookActions } from '../../actions';
import {
  BookPreviewCard,
  MessageBox,
  LoadingSpinner,
  BookSearch,
} from '../components';
import { CustomGrid } from '../base-kits';

class AllBooksContainer extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <Grid container spacing={16}>
        <CustomGrid
          container
          justify="center"
          alignItems="center"
          pt={16}
          pb={16}
        >
          <Grid item xs={6}>
            <BookSearch />
          </Grid>
        </CustomGrid>
        {this.props.dbReqStarted ? <LoadingSpinner /> : ''}
        {this.props.dbReqFinished ? (
          this.props.allBooks.length ? (
            this.props.allBooks.map(book => (
              <BookPreviewCard key={book._id} {...book} />
            ))
          ) : (
            <MessageBox emoji="(｡•́︿•̀｡)" message="No book found" />
          )
        ) : (
          ''
        )}
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    allBooks: state.bookReducer.allBooks,
    dbReqStarted: state.bookReducer.dbReqStarted,
    dbReqFinished: state.bookReducer.dbReqFinished,
  };
};

const mapActionsToProps = {
  getData: bookActions.getData,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(AllBooksContainer);
