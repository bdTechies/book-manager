import React, { Component } from 'react';
import { connect } from 'react-redux';
import converter from 'json-2-csv';
import { CloudUploadIcon, CloudDownloadIcon } from 'mdi-react';
import {
  Container,
  CustomGrid,
  CustomTypography,
  CustomButton,
} from '../base-kits';
import {
  MainMenu,
  TopMenuBar,
  MessageBox,
  LoadingSpinner,
} from '../components';
import { bookActions } from '../../actions';
const electron = window.require('electron');
const fs = electron.remote.require('fs');
const { dialog } = electron.remote;

class ImportExportPage extends Component {
  constructor(props) {
    super(props);

    this.handleExport = this.handleExport.bind(this);
    this.handleImport = this.handleImport.bind(this);
  }

  componentDidMount() {
    this.props.getData();
  }

  options = {
    delimiter: {
      wrap: '"',
      field: ',',
      eol: '~',
      trimHeaderValues: true,
      trimFieldValues: true,
      checkSchemaDifferences: false,
    },
    keys: [
      'title',
      'author',
      'translator',
      'publisher',
      'description',
      'categories',
      'coverImage',
      'readingStatus',
      'createdAt',
      'updatedAt',
    ],
  };

  handleExport() {
    if (this.props.allBooks.length > 0) {
      let data = JSON.stringify(this.props.allBooks);
      dialog.showSaveDialog(fileName => {
        if (fileName) {
          fs.writeFile(fileName, data, err => {
            if (err) {
              console.log(err.message);
            }
          });
        }
      });
    }
  }

  handleImport() {
    dialog.showOpenDialog(fileName => {
      if (fileName) {
        fs.readFile(fileName[0], 'utf-8', (err, fileData) => {
          if (err) {
            console.log(err.message);
          } else if (fileData) {
            let data = JSON.parse(fileData);
            console.log(data);
          } else {
            console.log('Empty file...');
          }
        });
      }
    });
  }

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
            onClick={this.handleImport}
          >
            <CloudDownloadIcon />
            <CustomTypography ml={12}>Import Data (json)</CustomTypography>
          </CustomButton>
          <CustomButton
            variant="contained"
            color="default"
            size="small"
            pr={32}
            pl={32}
            onClick={this.handleExport}
          >
            <CloudUploadIcon />
            <CustomTypography ml={12}>Export Data (json)</CustomTypography>
          </CustomButton>
        </CustomGrid>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    allBooks: state.bookReducer.allBooks,
    dbReqStarted: state.bookReducer.dbReqStarted,
    dbReqFinished: state.bookReducer.dbReqFinished,
  };
};

const mapActionsToProps = {
  getData: bookActions.getData,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ImportExportPage);
