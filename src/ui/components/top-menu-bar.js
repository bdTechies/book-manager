import React from 'react';
import PropTypes from 'prop-types';
import { TopMenuBarContainer, AppTitle } from '../base-kits';
import { ControlMenu } from '../components';

const TopMenuBar = props => (
  <TopMenuBarContainer>
    <ControlMenu />
    <AppTitle align="center" color="primary" variant="subheading">
      <span>{props.pageTitle}</span>
    </AppTitle>
  </TopMenuBarContainer>
);

TopMenuBar.propTypes = {
  pageTitle: PropTypes.string,
};

export default TopMenuBar;
