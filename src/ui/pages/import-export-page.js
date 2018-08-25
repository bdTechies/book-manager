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
  }

  componentDidMount() {
    this.props.getData();
  }

  handleExport() {
    const options = {
      delimiter: {
        wrap: '"',
        field: ',',
        eol: '\n',
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
    if (this.props.allBooks.length > 0) {
      converter
        .json2csvPromisified(this.props.allBooks, options)
        .then(csv => {
          dialog.showSaveDialog(fileName => {
            if (!fileName) {
              fileName = 'book-manager.csv';
            }
            fs.writeFile(fileName, csv, err => {
              if (err) {
                console.log(err.message);
              }
            });
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
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
            onClick={this.handleExport}
          >
            <CloudUploadIcon />
            <CustomTypography ml={12}>Export Data (CSV)</CustomTypography>
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
