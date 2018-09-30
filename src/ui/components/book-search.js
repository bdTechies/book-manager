import React, { Component } from 'react';
import { MagnifyIcon } from 'mdi-react';
import { connect } from 'react-redux';
import { bookActions } from '../../actions';
import { SearchInput } from '../base-kits';

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
        <SearchInput>
          <span>
            <MagnifyIcon />
            <input
              value={this.state.queryText}
              onChange={this.handleChange}
              placeholder="search book here..."
            />
          </span>
        </SearchInput>
      </form>
    );
  }
}

const mapActionsToProps = {
  searchBook: bookActions.searchBook,
  getAllBooks: bookActions.getData,
};

export default connect(
  null,
  mapActionsToProps
)(BookSearch);
