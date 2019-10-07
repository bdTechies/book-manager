import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { MenuList, WelcomePageMenuItem } from '../base-kits';
import { appControlActions } from '../../actions';

class WelcomePageMenu extends Component {
  onExitApp = () => {
    this.props.onExitApp();
  };

  render() {
    const { t } = this.props;

    return (
      <MenuList>
        <WelcomePageMenuItem>
          <Link to="/all-books">
            <span>{t('welcomePageMenu.viewAll')}</span>
          </Link>
        </WelcomePageMenuItem>
        <WelcomePageMenuItem>
          <Link to="/add-book">
            <span>{t('welcomePageMenu.addNew')}</span>
          </Link>
        </WelcomePageMenuItem>
        <WelcomePageMenuItem>
          <Link to="/about">
            <span>{t('welcomePageMenu.about')}</span>
          </Link>
        </WelcomePageMenuItem>
        <WelcomePageMenuItem>
          <span className="exit-button" onClick={this.onExitApp}>
            <span>{t('welcomePageMenu.exit')}</span>
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
)(withTranslation()(WelcomePageMenu));
