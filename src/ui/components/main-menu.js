import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Tooltip } from '@material-ui/core';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { bookActions } from '../../actions';
import { MenuList, MainMenuItem, Image } from '../base-kits';
import bmLogo from '../../assets/img/bm-logo-white.svg';
import PlusIcon from 'mdi-react/PlusIcon';
import AllInclusiveIcon from 'mdi-react/AllInclusiveIcon';
import SwapVerticalIcon from 'mdi-react/SwapVerticalIcon';
import TextIcon from 'mdi-react/TextIcon';
import SettingsIcon from 'mdi-react/SettingsIcon';
import InformationVariantIcon from 'mdi-react/InformationVariantIcon';

class MainMenu extends Component {
  render() {
    const { t } = this.props;
    return (
      <MenuList vertical="true">
        <Tooltip title={t('title')} placement="right">
          <MainMenuItem>
            <Image src={bmLogo} />
          </MainMenuItem>
        </Tooltip>
        <Tooltip title={t('mainMenu.addNew')} placement="right">
          <MainMenuItem onClick={() => this.props.resetSingleBook()}>
            <Link to="/add-book">
              <PlusIcon />
            </Link>
          </MainMenuItem>
        </Tooltip>
        <Tooltip title={t('mainMenu.allBooks')} placement="right">
          <MainMenuItem>
            <Link to="/all-books">
              <AllInclusiveIcon />
            </Link>
          </MainMenuItem>
        </Tooltip>
        <Tooltip title={t('mainMenu.notes')} placement="right">
          <MainMenuItem>
            <Link to="/all-notes">
              <TextIcon />
            </Link>
          </MainMenuItem>
        </Tooltip>
        <Tooltip title={t('mainMenu.exim')} placement="right">
          <MainMenuItem>
            <Link to="/exim">
              <SwapVerticalIcon />
            </Link>
          </MainMenuItem>
        </Tooltip>
        <Tooltip title={t('mainMenu.settings')} placement="right">
          <MainMenuItem>
            <Link to="/settings">
              <SettingsIcon />
            </Link>
          </MainMenuItem>
        </Tooltip>
        <Tooltip title={t('mainMenu.about')} placement="right">
          <MainMenuItem>
            <Link to="/about">
              <InformationVariantIcon />
            </Link>
          </MainMenuItem>
        </Tooltip>
      </MenuList>
    );
  }
}

const mapActionsToProps = {
  resetSingleBook: bookActions.resetSingleBook,
};

MainMenu.propTypes = {
  resetSingleBook: PropTypes.func,
};

export default connect(
  null,
  mapActionsToProps
)(withTranslation()(MainMenu));
