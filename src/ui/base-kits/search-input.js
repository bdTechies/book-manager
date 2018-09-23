import styled from 'styled-components';

const SearchInput = styled.div`
  span {
    border-radius: 4px;
    background: rgba(91, 31, 124, 0.1);

    svg.mdi-icon {
      width: 20px;
      height: 20px;
      position: relative;
      top: 6px;
    }

    input {
      outline: none;
      border: none;
      padding: 4px 8px;
      background: none;
    }
  }
`;

export default SearchInput;
