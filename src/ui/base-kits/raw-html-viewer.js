import styled from 'styled-components';

const RawHtmlViewr = styled.div`
  p,
  li {
    font-family: 'IBM Plex Sans', sans-serif !important;
    font-weight: 500 !important;
    color: rgba(0, 0, 0, 0.87) !important;

    span {
      font-family: 'IBM Plex Sans', sans-serif !important;
      font-weight: 500 !important;
      color: rgba(0, 0, 0, 0.87) !important;
    }
  }
  ol,
  ul {
    margin-left: 20px;

    li {
      margin-bottom: 4px;
    }
  }

  blockquote {
    border-left: 2px solid rgba(92, 31, 124, 0.5);
    padding-left: 8px;

    span {
      font-family: 'Arima Madurai', cursive !important;
      color: rgba(92, 31, 124, 1) !important;
    }
  }

  p,
  blockquote,
  ul,
  li {
    margin-bottom: 16px;
  }

  pre {
    white-space: pre-wrap;
    word-break: keep-all;
  }
`;

export default RawHtmlViewr;
