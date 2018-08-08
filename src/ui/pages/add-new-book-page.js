import React, { Component } from 'react';
import { Container } from '../base-kits';
import { MainMenu, TopMenuBar, AddNewBookForm } from '../components';

class AddNewBookPage extends Component {
  render() {
    return (
      <Container main>
        <MainMenu />
        <TopMenuBar pageTitle="Add Book" />
        <AddNewBookForm />
      </Container>
    );
  }
}

export default AddNewBookPage;
