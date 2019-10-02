import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
        perPage: 10,
      },
    };
  }
  componentDidMount() {
    this.props.resetAllBooks();
    this.props.getAllBooks(this.state.options);
    this.scrollListener = window.addEventListener(
      'scroll',
      this.handleScroll,
      true
    );
  }

  handleScroll = e => {
    const { allBooks, isScrolling, totalBooks } = this.props;
    if (isScrolling) return;
    if (allBooks.length >= totalBooks) return;
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    const lastBook = ReactDOM.findDOMNode(this.refs[allBooks.length - 1]);
    if (lastBook) {
      const lastBookContainer = lastBook.getBoundingClientRect();
      const lastBookOffset =
        lastBookContainer.top + scrollTop + window.pageYOffset;
      const bottomOffset = lastBook.clientHeight + lastBook.clientHeight / 3;
      if (bottomOffset > lastBookOffset) this.loadMoreBooks();
    }
  };

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
      <Grid container spacing={2} ref="parentContainer">
        {allBooks && allBooks.length ? (
          allBooks.map((book, idx) => (
            <BookPreviewCard ref={idx} key={book._id} {...book} />
          ))
        ) : dbReqStarted ? (
          <LoadingSpinner />
        ) : dbReqFinished ? (
          <MessageBox emoji="(｡•́︿•̀｡)" message="No book found" />
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
    totalBooks: state.bookReducer.totalBooks,
    isScrolling: state.bookReducer.isScrolling,
    dbReqStarted: state.bookReducer.dbReqStarted,
    dbReqFinished: state.bookReducer.dbReqFinished,
  };
};

const mapActionsToProps = {
  resetAllBooks: bookActions.resetAllBooks,
  getAllBooks: bookActions.getAllBooks,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(AllBooksContainer);
