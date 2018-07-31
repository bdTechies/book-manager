import React from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from '@material-ui/core';
import { PlusIcon, AllInclusiveIcon } from 'mdi-react';
import { MenuList, MainMenuItem } from '../base-kits';

const MainMenu = props => (
  <MenuList vertical="true">
    <Tooltip title="All Books" placement="right">
      <MainMenuItem>
        <Link to="/all-books">
          <PlusIcon />
        </Link>
      </MainMenuItem>
    </Tooltip>
    <MainMenuItem>
      <Link to="/add-book">
        <AllInclusiveIcon />
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

export default MainMenu;
