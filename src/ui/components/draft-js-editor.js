import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorContainer } from '../base-kits';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bookActions } from '../../actions';
import en from 'react-draft-wysiwyg/src/i18n/en';
import FormatQuoteOpenIcon from 'mdi-react/FormatQuoteOpenIcon';
import CodeTagsIcon from 'mdi-react/CodeTagsIcon';
import formatBold from '../../assets/icons/format-bold.svg';
import formatItalic from '../../assets/icons/format-italic.svg';
import formatUnderline from '../../assets/icons/format-underline.svg';
import formatSubscript from '../../assets/icons/format-subscript.svg';
import formatSuperscript from '../../assets/icons/format-superscript.svg';
import formatListBulleted from '../../assets/icons/format-list-bulleted.svg';
import formatListNumbered from '../../assets/icons/format-list-numbered.svg';
import formatAlignLeft from '../../assets/icons/format-align-left.svg';
import formatAlignCenter from '../../assets/icons/format-align-center.svg';
import formatAlignRight from '../../assets/icons/format-align-right.svg';
import formatAlignJustify from '../../assets/icons/format-align-justify.svg';

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
    bold: { icon: formatBold },
    italic: { icon: formatItalic },
    underline: { icon: formatUnderline },
    superscript: { icon: formatSuperscript },
    subscript: { icon: formatSubscript },
  },
  blockType: {
    inDropdown: false,
    options: ['Blockquote', 'Code'],
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
  },
  list: {
    options: ['unordered', 'ordered'],
    unordered: { icon: formatListBulleted },
    ordered: { icon: formatListNumbered },
  },
  textAlign: {
    left: { icon: formatAlignLeft },
    center: { icon: formatAlignCenter },
    right: { icon: formatAlignRight },
    justify: { icon: formatAlignJustify },
  },
};

class DraftJsEditor extends Component {
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
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <EditorContainer>
        <Editor
          editorState={editorState}
          onEditorStateChange={this.handleEditorContentChange}
          wrapperClassName="draft-wrapper"
          editorClassName="draft-editor"
          toolbarClassName="draft-toolbar"
          localization={localization}
          toolbar={toolbarOptions}
        />
      </EditorContainer>
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

DraftJsEditor.propTypes = {
  showEditorDialog: PropTypes.bool,
  editorContent: PropTypes.string,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(DraftJsEditor);
