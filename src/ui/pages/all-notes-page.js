import React, { Component } from 'react';
import { Container } from '../base-kits';
import { MainMenu, TopMenuBar } from '../components';
import { AllNotesContainer } from '../containers';

class AllNotesPage extends Component {
  render() {
    return (
      <Container main>
        <MainMenu />
        <TopMenuBar pageTitle="All Notes" />
        <AllNotesContainer />
      </Container>
    );
  }
}

export default AllNotesPage;
