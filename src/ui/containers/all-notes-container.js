import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
    this.props.resetAllNotes();
    this.props.getAllNotes(this.state.options);
    this.scrollListener = window.addEventListener(
      'scroll',
      this.handleScroll,
      true
    );
  }

  handleScroll = e => {
    const { allNotes, isScrolling, totalNotes } = this.props;
    if (isScrolling) return;
    if (allNotes.length >= totalNotes) return;
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    const lastNote = ReactDOM.findDOMNode(this.refs[allNotes.length - 1]);
    if (lastNote) {
      const lastNoteContainer = lastNote.getBoundingClientRect();
      const lastNoteOffset =
        lastNoteContainer.top + scrollTop + window.pageYOffset;
      const bottomOffset = lastNote.clientHeight * 3;
      if (bottomOffset > lastNoteOffset) this.loadMoreNotes();
    }
  };

  loadMoreNotes = () => {
    const { currentPage, perPage } = this.state.options;
    this.setState(
      {
        options: {
          currentPage: currentPage + 1,
          perPage: perPage,
        },
      },
      () => {
        return this.props.getAllNotes(this.state.options);
      }
    );
  };

  render() {
    const { allNotes, dbReqStarted, dbReqFinished } = this.props;

    return (
      <Grid container spacing={16}>
        {allNotes && allNotes.length ? (
          allNotes.map((note, idx) => (
            <NotePreviewCard ref={idx} key={note._id} {...note} />
          ))
        ) : dbReqStarted ? (
          <LoadingSpinner />
        ) : dbReqFinished ? (
          <MessageBox emoji="(｡•́︿•̀｡)" message="No note found" />
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
    totalNotes: state.bookReducer.totalNotes,
    isScrolling: state.bookReducer.isScrolling,
    dbReqStarted: state.bookReducer.dbReqStarted,
    dbReqFinished: state.bookReducer.dbReqFinished,
  };
};

const mapActionsToProps = {
  resetAllNotes: bookActions.resetAllNotes,
  getAllNotes: bookActions.getAllNotes,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(AllNotesContainer);
