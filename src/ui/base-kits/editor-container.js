import styled from 'styled-components';

const EditorContainer = styled.div`
  .draft-toolbar {
    justify-content: space-between;
    border-color: rgba(0, 0, 0, 0.1);

    .rdw-option-wrapper {
      border: none;
      height: 28px;
      transition: all ease-in-out 0.3s;

      &:hover {
        box-shadow: none;
        background-color: rgba(92, 31, 124, 0.1);
      }

      img {
        width: 20px;
        height: auto;
      }
    }

    .rdw-option-active {
      box-shadow: none;
      background-color: rgba(92, 31, 124, 0.1);
    }
  }

  .draft-editor {
    border: 1px solid rgba(0, 0, 0, 0.1);
    .DraftEditor-editorContainer {
      padding: 0 16px;
      height: 300px;
      font-size: 1rem;
      font-family: 'IBM Plex Sans', sans-serif;
    }
  }
`;

export default EditorContainer;
