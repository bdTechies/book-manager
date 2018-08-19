import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { bookActions } from '../../actions';
import { BookPreviewCard, MessageBox } from '../components';

class AllBooksContainer extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    console.log(this.props);
    return (
      <Grid container spacing={16}>
        {this.props.dbReqStarted ? <p>Hello</p> : ''}
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
