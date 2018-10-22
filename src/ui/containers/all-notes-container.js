import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { bookActions } from '../../actions';
import { NotePreviewCard, MessageBox, LoadingSpinner } from '../components';

class AllNotesContainer extends Component {
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
    this.props.getAllNotes({ perPage: 0 });
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
    return (
      <Grid container spacing={16}>
        {this.props.dbReqStarted ? <LoadingSpinner /> : ''}
        {this.props.dbReqFinished ? (
          this.props.allNotes.length ? (
            this.props.allNotes.map(note => (
              <NotePreviewCard key={note._id} {...note} />
            ))
          ) : (
            <MessageBox emoji="(｡•́︿•̀｡)" message="No note found" />
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
    allNotes: state.bookReducer.allNotes,
    dbReqStarted: state.bookReducer.dbReqStarted,
    dbReqFinished: state.bookReducer.dbReqFinished,
  };
};

const mapActionsToProps = {
  getAllNotes: bookActions.getAllNotes,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(AllNotesContainer);
