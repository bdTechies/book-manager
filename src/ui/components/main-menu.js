import React from 'react';
import { MenuList, MainMenuItem } from '../base-kits';
import { Link } from 'react-router-dom';

const MainMenu = () => (
  <MenuList>
    <MainMenuItem>
      <Link to="/all-books">view all</Link>
    </MainMenuItem>
    <MainMenuItem>add new</MainMenuItem>
    <MainMenuItem>about</MainMenuItem>
    <MainMenuItem>exit</MainMenuItem>
  </MenuList>
);

export default MainMenu;
