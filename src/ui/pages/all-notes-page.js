import React, { Component } from 'react';
import { Container } from '../base-kits';
import { MainMenu, TopMenuBar } from '../components';

class AllNotesPage extends Component {
  render() {
    return (
      <Container pl="60px" pt="50px">
        <MainMenu />
        <TopMenuBar pageTitle="All Notes" />
        <p>All notes...</p>
      </Container>
    );
  }
}

export default AllNotesPage;
