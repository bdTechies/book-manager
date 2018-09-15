import React, { Component } from 'react';
import { Container } from '../base-kits';
import { MainMenu, TopMenuBar, MessageBox } from '../components';

class SettingsPage extends Component {
  render() {
    return (
      <Container main>
        <MainMenu />
        <TopMenuBar pageTitle="Settings" />
        <MessageBox emoji="ᕕ( ᐛ )ᕗ" message="Coming soooooooooo...n!" />
      </Container>
    );
  }
}

export default SettingsPage;
