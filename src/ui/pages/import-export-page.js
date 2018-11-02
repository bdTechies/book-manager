import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    this.props.resetAllBooks();
    this.props.getAllBooks({ perPage: 0, currentPage: 0 });
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
      let data = [],
        c = 0;

      this.props.allBooks.map(book => {
        c++;
        if (book.hasOwnProperty('_id')) {
          delete book['_id'];
        }
        data.push(book);
        if (this.props.allBooks.length === c) {
          data = JSON.stringify(data);
          dialog.showSaveDialog(
            {
              defaultPath: '~/bm-data.json',
              filters: [
                {
                  name: 'json',
                  extensions: ['json'],
                },
              ],
            },
            fileName => {
              if (fileName) {
                fs.writeFile(fileName, data, err => {
                  if (err) {
                    console.log(err.message);
                  } else {
                    this.props.finisExport();
                    setTimeout(() => {
                      this.props.resetFinisExport();
                    }, 3000);
                  }
                });
              }
            }
          );
        }
        return data;
      });
    }
  }

  handleImport() {
    dialog.showOpenDialog(
      {
        filters: [
          {
            name: 'json',
            extensions: ['json'],
          },
        ],
      },
      fileName => {
        if (fileName) {
          fs.readFile(fileName[0], 'utf-8', (err, fileData) => {
            if (err) {
              console.log(err.message);
            } else if (fileData) {
              let data = JSON.parse(fileData);
              this.props.importBookList(data);
              setTimeout(() => {
                this.props.resetFinisImportReq();
              }, 3000);
            } else {
              console.log('Empty file...');
            }
          });
        }
      }
    );
  }

  render() {
    return (
      <Container main>
        <MainMenu />
        <TopMenuBar pageTitle="Import/Export Data" />
        {this.props.importStarted ? <LoadingSpinner /> : ''}
        {this.props.importCompleted ? (
          <MessageBox emoji="ᕕ( ᐛ )ᕗ" message="Data imported successfully!" />
        ) : (
          ''
        )}
        {this.props.exportCompleted ? (
          <MessageBox emoji="ᕕ( ᐛ )ᕗ" message="Data exported successfully!" />
        ) : (
          ''
        )}
        {!this.props.importStarted &&
        !this.props.importCompleted &&
        !this.exportCompleted ? (
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
        ) : (
          ''
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    allBooks: state.bookReducer.allBooks,
    importStarted: state.bookReducer.importStarted,
    importCompleted: state.bookReducer.importCompleted,
    exportCompleted: state.bookReducer.exportCompleted,
  };
};

const mapActionsToProps = {
  resetAllBooks: bookActions.resetAllBooks,
  getAllBooks: bookActions.getAllBooks,
  importBookList: bookActions.importBookList,
  finisExport: bookActions.finisExport,
  resetFinisExport: bookActions.resetFinisExport,
  resetFinisImportReq: bookActions.resetFinisImportReq,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ImportExportPage);
