import React, { Component } from 'react';
import { Container } from '../base-kits';
import { MainMenu, TopMenuBar, SingleBookPreviewCard } from '../components';

class SingleBookPage extends Component {
  render() {
    return (
      <Container main>
        <MainMenu />
        <TopMenuBar pageTitle="Book: A Tale of Two Cities" />
        <SingleBookPreviewCard id={this.props.match.params.id} />
      </Container>
    );
  }
}

export default SingleBookPage;
