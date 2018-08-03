import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const AppTitle = styled(Typography)`
  && {
    display: inline-block;
    width: 100%;
    height: 50px;
    line-height: 50px;

    span {
      background: rgba(91, 31, 124, 0.1);
      padding: 2px 12px;
      border-radius: 4px;
    }
  }
`;

export default AppTitle;
