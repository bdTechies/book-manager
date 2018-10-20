import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { bookActions } from '../../actions';
import { BookPreviewCard, MessageBox, LoadingSpinner } from '../components';

class AllBooksContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      options: {
        currentPage: 1,
        perPage: 2,
      },
    };
  }
  componentDidMount() {
    this.props.getAllBooks(this.state.options);
  }

  loadMoreBooks = () => {
    const { currentPage, perPage } = this.state.options;
    this.setState(
      {
        options: {
          currentPage: currentPage + 1,
          perPage: perPage,
        },
      },
      () => {
        return this.props.getAllBooks(this.state.options);
      }
    );
  };

  render() {
    const { allBooks, dbReqStarted, dbReqFinished } = this.props;
    return (
      <Grid container spacing={16}>
        {dbReqStarted ? <LoadingSpinner /> : ''}
        {dbReqFinished ? (
          allBooks.length ? (
            allBooks.map(book => <BookPreviewCard key={book._id} {...book} />)
          ) : (
            <MessageBox emoji="(｡•́︿•̀｡)" message="No book found" />
          )
        ) : (
          ''
        )}
        {allBooks.length ? (
          <a onClick={this.loadMoreBooks}>Load more...</a>
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
  getAllBooks: bookActions.getAllBooks,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(AllBooksContainer);
