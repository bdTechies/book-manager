import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { MenuList, WelcomePageMenuItem } from '../base-kits';
import { appControlActions } from '../../actions';

class WelcomePageMenu extends Component {
  onExitApp = () => {
    this.props.onExitApp();
  };

  render() {
    return (
      <MenuList>
        <WelcomePageMenuItem>
          <Link to="/all-books">
            <span>view all</span>
          </Link>
        </WelcomePageMenuItem>
        <WelcomePageMenuItem>
          <Link to="/add-book">
            <span>add new</span>
          </Link>
        </WelcomePageMenuItem>
        <WelcomePageMenuItem>
          <Link to="/about">
            <span>about</span>
          </Link>
        </WelcomePageMenuItem>
        <WelcomePageMenuItem>
          <span className="exit-button" onClick={this.onExitApp}>
            <span>exit</span>
          </span>
        </WelcomePageMenuItem>
      </MenuList>
    );
  }
}

const mapActionsToProps = {
  onExitApp: appControlActions.exitApp,
};

WelcomePageMenu.propTypes = {
  onExitApp: PropTypes.func,
};

export default connect(
  null,
  mapActionsToProps
)(WelcomePageMenu);
