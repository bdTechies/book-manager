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
        perPage: 6,
      },
      isScrolling: false,
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
    const { isScrolling, currentPage } = this.state;
    if (isScrolling) return;

    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    const lastBook = ReactDOM.findDOMNode(
      this.refs[this.props.allBooks.length - 1]
    );
    const lastBookContainer = lastBook.getBoundingClientRect();
    const lastBookOffset =
      lastBookContainer.top + scrollTop + window.pageYOffset;
    const bottomOffset = lastBook.clientHeight - 20;

    if (bottomOffset > lastBookOffset) this.loadMoreBooks();
  };

  loadMoreBooks = () => {
    const { currentPage, perPage } = this.state.options;
    console.log('Done!');
    this.setState(
      {
        options: {
          currentPage: currentPage + 1,
          perPage: perPage,
        },
        isScrolling: true,
      },
      () => {
        return this.props.getAllBooks(this.state.options);
      }
    );
  };

  render() {
    const { allBooks, dbReqStarted, dbReqFinished } = this.props;
    return (
      <Grid container spacing={16} ref="parentContainer">
        {dbReqStarted ? <LoadingSpinner /> : ''}
        {dbReqFinished ? (
          allBooks.length ? (
            allBooks.map((book, idx) => (
              <BookPreviewCard ref={idx} key={book._id} {...book} />
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
  resetAllBooks: bookActions.resetAllBooks,
  getAllBooks: bookActions.getAllBooks,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(AllBooksContainer);
