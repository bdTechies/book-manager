import React from 'react';
import PropTypes from 'prop-types';
import { TopMenuBarContainer, AppTitle } from '../base-kits';
import { ControlMenu, BookSearch } from '../components';

const TopMenuBar = props => (
  <TopMenuBarContainer>
    <ControlMenu />
    <AppTitle align="center" color="primary" variant="subheading">
      {props.pageTitle === 'all-books' ? (
        <BookSearch />
      ) : (
        <span>{props.pageTitle}</span>
      )}
    </AppTitle>
  </TopMenuBarContainer>
);

TopMenuBar.propTypes = {
  pageTitle: PropTypes.string,
};

export default TopMenuBar;
