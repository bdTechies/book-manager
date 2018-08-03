import React, { Component } from 'react';
import { Container } from '../base-kits';
import { MainMenu, TopMenuBar } from '../components';

class AllBooksPage extends Component {
  render() {
    return (
      <Container pl="60px" pt="50px">
        <MainMenu />
        <TopMenuBar pageTitle="All Books" />
        <p>All Books...</p>
      </Container>
    );
  }
}

export default AllBooksPage;
