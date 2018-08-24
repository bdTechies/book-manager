import React from 'react';
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

export default TopMenuBar;
