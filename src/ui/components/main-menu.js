import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Tooltip } from '@material-ui/core';
import { connect } from 'react-redux';
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
    return (
      <MenuList vertical="true">
        <Tooltip title="Book Manager" placement="right">
          <MainMenuItem>
            <Image src={bmLogo} />
          </MainMenuItem>
        </Tooltip>
        <Tooltip title="Add Book" placement="right">
          <MainMenuItem onClick={() => this.props.resetSingleBook()}>
            <Link to="/add-book">
              <PlusIcon />
            </Link>
          </MainMenuItem>
        </Tooltip>
        <Tooltip title="All Books" placement="right">
          <MainMenuItem>
            <Link to="/all-books">
              <AllInclusiveIcon />
            </Link>
          </MainMenuItem>
        </Tooltip>
        <Tooltip title="Notes" placement="right">
          <MainMenuItem>
            <Link to="/all-notes">
              <TextIcon />
            </Link>
          </MainMenuItem>
        </Tooltip>
        <Tooltip title="Import/Export" placement="right">
          <MainMenuItem>
            <Link to="/exim">
              <SwapVerticalIcon />
            </Link>
          </MainMenuItem>
        </Tooltip>
        <Tooltip title="Settings" placement="right">
          <MainMenuItem>
            <Link to="/settings">
              <SettingsIcon />
            </Link>
          </MainMenuItem>
        </Tooltip>
        <Tooltip title="About Book Manager" placement="right">
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
)(MainMenu);
