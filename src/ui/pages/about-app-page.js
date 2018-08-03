import React, { Component } from 'react';
import { Container } from '../base-kits';
import { MainMenu, TopMenuBar } from '../components';

class AboutAppPage extends Component {
  render() {
    return (
      <Container pl="60px" pt="50px">
        <MainMenu />
        <TopMenuBar pageTitle="About Book Manager" />
        <p>About Book Manager</p>
      </Container>
    );
  }
}

export default AboutAppPage;
