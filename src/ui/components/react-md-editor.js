import React, { Component } from 'react';
import * as Showdown from 'showdown';
import ReactMde from 'react-mde';
import 'react-mde/lib/styles/css/react-mde-all.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bookActions } from '../../actions';

import {
  PlusIcon,
  AllInclusiveIcon,
  SwapVerticalIcon,
  TextIcon,
  SettingsIcon,
  InformationVariantIcon,
} from 'mdi-react';

class ReactMdEditor extends Component {
  constructor(props) {
    super(props);
    this.converter = new Showdown.Converter({
      tables: true,
      simplifiedAutoLink: true,
      strikethrough: true,
      tasklists: true,
    });
  }

  handleChange = value => {
    this.props.setEditorContent(value);
  };

  render() {
    return (
      <div>
        <ReactMde
          buttonContentOptions={{
            iconProvider: heading => <PlusIcon name={heading} />,
            iconProvider: strikethrough => <TextIcon name={strikethrough} />,
          }}
          value={this.props.editorContent}
          onChange={this.handleChange}
          generateMarkdownPreview={markdown =>
            Promise.resolve(this.converter.makeHtml(markdown))
          }
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showEditorDialog: state.bookReducer.showEditorDialog,
    editorContent: state.bookReducer.editorContent,
  };
};

const mapActionsToProps = {
  setEditorContent: bookActions.setEditorContent,
};

ReactMdEditor.propTypes = {
  showEditorDialog: PropTypes.bool,
  editorContent: PropTypes.string,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ReactMdEditor);
