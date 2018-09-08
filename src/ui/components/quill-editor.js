import React, { Component } from 'react';
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

class QuillEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    console.log(value);
    this.setState({ text: value });
  }

  render() {
    return (
      <div>
        <CustomReactQuill
          value={this.state.text}
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
    newNote: state.bookReducer.newNote,
  };
};

const mapActionsToProps = {
  getBookById: bookActions.getBookById,
  deleteBook: bookActions.deleteBookById,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(QuillEditor);
