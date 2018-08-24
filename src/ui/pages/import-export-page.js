import React, { Component } from 'react';
import { CloudUploadIcon, CloudDownloadIcon } from 'mdi-react';
import {
  Container,
  CustomGrid,
  CustomTypography,
  CustomButton,
} from '../base-kits';
import { MainMenu, TopMenuBar } from '../components';

class ImportExportPage extends Component {
  render() {
    return (
      <Container main>
        <MainMenu />
        <TopMenuBar pageTitle="Import/Export Data" />
        <CustomGrid
          container
          direction="column"
          alignItems="center"
          justify="center"
          customheight="100%"
        >
          <CustomButton
            variant="contained"
            color="default"
            size="small"
            pr={32}
            pl={32}
            mb={16}
          >
            <CloudDownloadIcon />
            <CustomTypography ml={12}>Import Data (CSV)</CustomTypography>
          </CustomButton>
          <CustomButton
            variant="contained"
            color="default"
            size="small"
            pr={32}
            pl={32}
          >
            <CloudUploadIcon />
            <CustomTypography ml={12}>Export Data (CSV)</CustomTypography>
          </CustomButton>
        </CustomGrid>
      </Container>
    );
  }
}

export default ImportExportPage;
