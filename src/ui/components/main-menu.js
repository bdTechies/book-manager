import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from '@material-ui/core';
import { connect } from 'react-redux';
import { bookActions } from '../../actions';
import { MenuList, MainMenuItem, Image } from '../base-kits';
import bmLogo from '../../assets/img/bm-logo-white.svg';
import {
  PlusIcon,
  AllInclusiveIcon,
  SwapVerticalIcon,
  TextIcon,
  SettingsIcon,
  InformationVariantIcon,
} from 'mdi-react';

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

export default connect(
  null,
  mapActionsToProps
)(MainMenu);
