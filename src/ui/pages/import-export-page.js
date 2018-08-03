import React, { Component } from 'react';
import { Container } from '../base-kits';
import { MainMenu, TopMenuBar } from '../components';

class ImportExportPage extends Component {
  render() {
    return (
      <Container pl="60px" pt="50px">
        <MainMenu />
        <TopMenuBar pageTitle="Import/Export Data" />
        <p>Import/Export Data</p>
      </Container>
    );
  }
}

export default ImportExportPage;
