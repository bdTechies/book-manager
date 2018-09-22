import React, { Component } from 'react';
import { MagnifyIcon } from 'mdi-react';
import { connect } from 'react-redux';
import { Input, InputAdornment } from '@material-ui/core';
import { bookActions } from '../../actions';
import { CustomButton } from '../base-kits';

class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryText: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({
      queryText: event.target.value,
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.queryText) {
      this.props.getAllBooks();
    } else {
      this.props.searchBook(this.state.queryText);
    }
    this.setState({
      queryText: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} noValidate>
        <Input
          placeholder="Search by title, author or category..."
          inputProps={{
            'aria-label': 'Description',
          }}
          value={this.state.queryText}
          onChange={this.handleChange}
          fullWidth={true}
          startAdornment={
            <InputAdornment position="start">
              <MagnifyIcon />
            </InputAdornment>
          }
        />
      </form>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     bookAdded: state.bookReducer.bookAdded,
//     bookUpdated: state.bookReducer.bookUpdated,
//     showMessageDialog: state.bookReducer.showMessageDialog,
//     book: state.bookReducer.singleBook,
//   };
// };

const mapActionsToProps = {
  searchBook: bookActions.searchBook,
  getAllBooks: bookActions.getData,
};

export default connect(
  null,
  mapActionsToProps
)(BookSearch);
