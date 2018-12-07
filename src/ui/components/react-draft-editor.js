import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { DraftEditorContainer } from '../base-kits';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bookActions } from '../../actions';
import en from 'react-draft-wysiwyg/src/i18n/en';
import { FormatQuoteOpenIcon, TextIcon, CodeTagsIcon } from 'mdi-react';
import formatItalic from '../../assets/icons/format-italic.svg';

en['components.controls.blocktype.normal'] = <TextIcon />;
en['components.controls.blocktype.blockquote'] = <FormatQuoteOpenIcon />;
en['components.controls.blocktype.code'] = <CodeTagsIcon />;
const localization = {
  locale: 'en',
  translations: en,
};
const toolbarOptions = {
  options: ['inline', 'blockType', 'list', 'textAlign'],
  inline: {
    options: ['bold', 'italic', 'underline', 'superscript', 'subscript'],
    italic: { icon: formatItalic },
  },
  blockType: {
    inDropdown: false,
    options: ['Normal', 'Blockquote', 'Code'],
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
  },
  list: {
    options: ['unordered', 'ordered'],
  },
};

class DraftEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  componentDidMount() {
    const { editorContent } = this.props;

    const contentBlock = htmlToDraft(editorContent);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const editorState = EditorState.createWithContent(contentState);
      this.setState({
        editorState,
      });
    }
  }

  handleEditorContentChange = editorState => {
    const value = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    this.props.setEditorContent(value);
    console.log(value);
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <DraftEditorContainer>
        <Editor
          editorState={editorState}
          onEditorStateChange={this.handleEditorContentChange}
          wrapperClassName="draft-wrapper"
          editorClassName="draft-editor"
          localization={localization}
          toolbar={toolbarOptions}
        />
      </DraftEditorContainer>
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

DraftEditor.propTypes = {
  showEditorDialog: PropTypes.bool,
  editorContent: PropTypes.string,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(DraftEditor);
