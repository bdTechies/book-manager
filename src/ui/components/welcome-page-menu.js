import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { MenuList, WelcomePageMenuItem } from '../base-kits';
import { appControlActions } from '../../actions';

class WelcomePageMenu extends Component {
  constructor(props) {
    super(props);

    this.onExitApp = this.onExitApp.bind(this);
  }

  onExitApp() {
    this.props.onExitApp();
  }

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
          <a onClick={this.onExitApp}>
            <span>exit</span>
          </a>
        </WelcomePageMenuItem>
      </MenuList>
    );
  }
}

const mapActionsToProps = {
  onExitApp: appControlActions.exitApp,
};

export default connect(
  null,
  mapActionsToProps
)(WelcomePageMenu);
