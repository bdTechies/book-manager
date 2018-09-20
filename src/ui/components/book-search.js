import React, { Component } from 'react';
import { Input, InputAdornment } from '@material-ui/core';
import { CustomButton } from '../base-kits';
import { MagnifyIcon } from 'mdi-react';

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
    console.log(this.state.queryText);
    // this.props.searchBook(this.state.queryText);
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

export default BookSearch;
