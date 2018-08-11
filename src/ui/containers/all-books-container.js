import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { bookActions } from '../../actions';
import { BookPreviewCard, MessageBox } from '../components';

class AllBooksContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //this.props.getData();
    this.props.initMainProcessListeners();
  }

  render() {
    console.log(this.props.allBooks);
    return (
      <Grid container spacing={16}>
        {this.props.allBooks.length ? (
          this.props.allBooks.map(book => (
            <BookPreviewCard key={book._id} {...book} />
          ))
        ) : (
          <MessageBox emoji="(｡•́︿•̀｡)" message="No book found" />
        )}
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    allBooks: state.bookReducer.allBooks,
  };
};

const mapActionsToProps = {
  getData: bookActions.getData,
  saveBook: bookActions.saveBook,
  initMainProcessListeners: bookActions.initMainProcessListeners,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(AllBooksContainer);
