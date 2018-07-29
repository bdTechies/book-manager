import React from 'react';
import { MenuList, MainMenuItem } from '../base-kits';
import { Link } from 'react-router-dom';

const WelcomePageMenu = props => (
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
      <a onClick={props.onExitApp()}>
        <span>exit</span>
      </a>
    </MainMenuItem>
  </MenuList>
);

export default WelcomePageMenu;
