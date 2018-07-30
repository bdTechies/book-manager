import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { MenuList, MainMenuItem } from '../base-kits';
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
        <MainMenuItem>
          <Link to="/all-books">
            <span>view all</span>
          </Link>
        </MainMenuItem>
        <MainMenuItem>
          <Link to="/add-book">
            <span>add new</span>
          </Link>
        </MainMenuItem>
        <MainMenuItem>
          <Link to="/about">
            <span>about</span>
          </Link>
        </MainMenuItem>
        <MainMenuItem>
          <a onClick={this.onExitApp}>
            <span>exit</span>
          </a>
        </MainMenuItem>
      </MenuList>
    );
  }
}

console.log(typeof appControlActions.exitApp);

const mapActionsToProps = {
  onExitApp: appControlActions.exitApp,
};

export default connect(
  null,
  mapActionsToProps
)(WelcomePageMenu);
