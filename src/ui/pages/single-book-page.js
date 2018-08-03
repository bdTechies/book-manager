import React, { Component } from 'react';
import { Container } from '../base-kits';
import { MainMenu, TopMenuBar } from '../components';

class SingleBookPage extends Component {
  render() {
    return (
      <Container main>
        <MainMenu />
        <TopMenuBar pageTitle="Book: A Tale of Two Cities" />
        <p>Single book...</p>
      </Container>
    );
  }
}

export default SingleBookPage;
