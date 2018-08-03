import React, { Component } from 'react';
import { Container } from '../base-kits';
import { MainMenu, TopMenuBar } from '../components';

class AddNewBookPage extends Component {
  render() {
    return (
      <Container pl="60px" pt="50px">
        <MainMenu />
        <TopMenuBar pageTitle="Add Book" />
        <p>Add Book...</p>
      </Container>
    );
  }
}

export default AddNewBookPage;
