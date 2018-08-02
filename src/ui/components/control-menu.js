import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MenuList, ControlMenuItem, Image } from '../base-kits';
import { appControlActions } from '../../actions';
import minimizeIcon from '../assets/img/Minimize.svg';
import maximizeIcon from '../assets/img/Maximize.svg';
import closeIcon from '../assets/img/Close.svg';

class ControlMenu extends Component {
  constructor(props) {
    super(props);

    this.onExitApp = this.onExitApp.bind(this);
  }

  onExitApp() {
    this.props.onExitApp();
  }

  render() {
    return (
      <MenuList control="true">
        <ControlMenuItem>
          <a onClick={this.onExitApp}>
            <Image src={minimizeIcon} />
          </a>
        </ControlMenuItem>
        <ControlMenuItem>
          <a onClick={this.onExitApp}>
            <Image src={maximizeIcon} />
          </a>
        </ControlMenuItem>
        <ControlMenuItem>
          <a onClick={this.onExitApp}>
            <Image src={closeIcon} />
          </a>
        </ControlMenuItem>
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
)(ControlMenu);
