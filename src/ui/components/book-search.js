import React, { Component } from 'react';
import MagnifyIcon from 'mdi-react/MagnifyIcon';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
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
    this.props.resetAllBooks();
    if (!this.state.queryText) {
      this.props.getAllBooks({ perPage: 0 });
    } else {
      this.props.searchBook({ queryText: this.state.queryText, perPage: 0 });
    }
    this.setState({
      queryText: '',
    });
  }

  render() {
    const { t } = this.props;

    return (
      <form onSubmit={this.handleSubmit} noValidate>
        <SearchInput>
          <span>
            <MagnifyIcon />
            <input
              value={this.state.queryText}
              onChange={this.handleChange}
              placeholder={t('topMenuBar.searchPlaceholder')}
            />
          </span>
        </SearchInput>
      </form>
    );
  }
}

const mapActionsToProps = {
  searchBook: bookActions.searchBook,
  getAllBooks: bookActions.getAllBooks,
  resetAllBooks: bookActions.resetAllBooks,
};

export default connect(
  null,
  mapActionsToProps
)(withTranslation()(BookSearch));
