import styled from 'styled-components';

const RawHtmlViewr = styled.div`
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.87);
  ol,
  ul {
    margin-left: 20px;
  }

  blockquote {
    font-family: 'Arima Madurai', cursive;
    padding-left: 8px;
    color: rgba(92, 31, 124, 1);
    border-left: 2px solid rgba(92, 31, 124, 0.5);
  }
`;

export default RawHtmlViewr;
