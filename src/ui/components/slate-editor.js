import React, { Component } from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';
import { connect } from 'react-redux';
import { bookActions } from '../../actions';

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'A line of text in a paragraph.',
              },
            ],
          },
        ],
      },
    ],
  },
});

class SlateEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: initialValue,
    };
  }

  onChange = ({ value }) => {
    this.setState({ value });
  };

  render() {
    return <Editor value={this.state.value} onChange={this.onChange} />;
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
)(SlateEditor);
