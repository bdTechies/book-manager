import ReactQuill from 'react-quill';
import styled from 'styled-components';

const CustomReactQuill = styled(ReactQuill)`
  .ql-editor {
    height: 300px;
    overflow-y: auto;
    font-size: 1rem;
  }
`;

export default CustomReactQuill;
