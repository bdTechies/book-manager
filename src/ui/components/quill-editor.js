import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CustomReactQuill } from '../base-kits';
import 'react-quill/dist/quill.snow.css';
import { connect } from 'react-redux';
import { bookActions } from '../../actions';

const modules = {
  toolbar: [
    ['bold', 'italic', 'underline'],
    ['blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ indent: '-1' }, { indent: '+1' }],
    ['link'],
  ],
};

const formats = [
  'bold',
  'italic',
  'underline',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
];

class QuillEditor extends Component {
  handleChange = value => {
    this.props.setEditorContent(value);
  };

  render() {
    return (
      <div>
        <CustomReactQuill
          value={this.props.editorContent}
          onChange={this.handleChange}
          theme="snow"
          modules={modules}
          formats={formats}
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

QuillEditor.propTypes = {
  showEditorDialog: PropTypes.bool,
  editorContent: PropTypes.string,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(QuillEditor);
