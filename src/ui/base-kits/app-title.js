import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const AppTitle = styled(Typography)`
  -webkit-user-select: none;
  -ms-overflow-style: scrollbar;
  -webkit-app-region: drag;

  && {
    display: inline-block;
    width: calc(100% - 88px);
    height: 50px;
    line-height: 50px;
    margin: 0 auto;
    padding-left: 88px;

    span {
      background: rgba(91, 31, 124, 0.1);
      padding: 2px 12px;
      border-radius: 4px;
    }
  }
`;

export default AppTitle;
