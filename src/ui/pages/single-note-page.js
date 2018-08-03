import React, { Component } from 'react';
import { Container } from '../base-kits';
import { MainMenu, TopMenuBar } from '../components';

class SingleNotePage extends Component {
  render() {
    return (
      <Container main>
        <MainMenu />
        <TopMenuBar pageTitle="Note: A Tale of Two Cities" />
        <p>Note for A Tale of Two Cities</p>
      </Container>
    );
  }
}

export default SingleNotePage;
