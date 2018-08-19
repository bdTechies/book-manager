import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {
  Container,
  PaddedPaper,
  CustomGrid,
  CustomTypography,
  Image,
} from '../base-kits';
import { MainMenu, TopMenuBar } from '../components';
import bmLogo from '../../assets/img/bm-logo-purple.svg';
const electron = window.require('electron');

class AboutAppPage extends Component {
  url = 'http://bdtechies.com';

  constructor(props) {
    super(props);

    this.handleOpenUrl = this.handleOpenUrl.bind(this);
  }

  handleOpenUrl() {
    electron.shell.openExternal(this.url);
  }

  render() {
    return (
      <Container main>
        <MainMenu />
        <TopMenuBar pageTitle="About Book Manager" />
        <CustomGrid
          container
          direction="column"
          alignItems="center"
          justify="center"
          customheight="100%"
        >
          <PaddedPaper width={436} square>
            <Container align="center" width="100%" p={16}>
              <Image src={bmLogo} width="100" />
              <CustomTypography
                variant="title"
                customfont="Arima"
                color="primary"
                mt={12}
              >
                Book Manager
              </CustomTypography>
              <CustomTypography
                variant="subheading"
                customfont="Arima"
                color="primary"
                mb={12}
              >
                Version 0.1.0
              </CustomTypography>
              <Button
                variant="outlined"
                color="primary"
                onClick={this.handleOpenUrl}
              >
                book-manager.bdtechies.com
              </Button>
              <CustomTypography variant="body2" color="primary" mt={12}>
                Book Manager is an open source library management application
                developed by bdTechies with the feature of adding, searching
                books, taking notes while reading and importing/exporting the
                saved data.
              </CustomTypography>
            </Container>
          </PaddedPaper>
        </CustomGrid>
      </Container>
    );
  }
}

export default AboutAppPage;
