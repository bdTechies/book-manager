import React, { Component } from 'react';
import { Container } from '../base-kits';
import { MainMenu, TopMenuBar } from '../components';

class ImportExportPage extends Component {
  render() {
    return (
      <Container main>
        <MainMenu />
        <TopMenuBar pageTitle="Import/Export Data" />
        <p>Import/Export Data</p>
      </Container>
    );
  }
}

export default ImportExportPage;
