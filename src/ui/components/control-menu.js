import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MenuList, ControlMenuItem, Image } from '../base-kits';
import { appControlActions } from '../../actions';
import minimizeIcon from '../assets/img/Minimize.svg';
import maximizeIcon from '../assets/img/Maximize.svg';
import unMaximizeIcon from '../assets/img/Unmaximize.svg';
import closeIcon from '../assets/img/Close.svg';

class ControlMenu extends Component {
  constructor(props) {
    super(props);
    this.onMinimizeApp = this.onMinimizeApp.bind(this);
    this.onMaximizeApp = this.onMaximizeApp.bind(this);
    this.toggleMaximize = this.toggleMaximize.bind(this);
    this.onExitApp = this.onExitApp.bind(this);
  }

  onMinimizeApp() {
    this.props.onMinimizeApp();
  }

  onMaximizeApp() {
    this.props.onMaximizeApp();
  }

  onUnMaximizeApp() {
    this.props.onUnMaximizeApp();
  }

  toggleMaximize() {
    if (this.props.isMaximized) {
      this.props.onUnMaximizeApp();
      this.props.toggleMaximize(!this.props.isMaximized);
    } else {
      this.props.onMaximizeApp();
      this.props.toggleMaximize(!this.props.isMaximized);
    }
  }

  onExitApp() {
    this.props.onExitApp();
  }

  render() {
    return (
      <MenuList control="true">
        <ControlMenuItem>
          <a onClick={this.onMinimizeApp}>
            <Image src={minimizeIcon} />
          </a>
        </ControlMenuItem>
        <ControlMenuItem>
          <a onClick={this.toggleMaximize}>
            <Image
              src={this.props.isMaximized ? unMaximizeIcon : maximizeIcon}
            />
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

const mapStateToProps = state => ({
  isMaximized: state.appControlReducer.isMaximized,
});

const mapActionsToProps = {
  onExitApp: appControlActions.exitApp,
  onMinimizeApp: appControlActions.minimizeApp,
  onMaximizeApp: appControlActions.maximizeApp,
  onUnMaximizeApp: appControlActions.unMaximizeApp,
  toggleMaximize: appControlActions.toggleMaximize,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ControlMenu);
