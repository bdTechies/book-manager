import styled from 'styled-components';
import { Paper } from '@material-ui/core';

const TopMenuBarContainer = styled(Paper)`
  height: 50px;
  position: fixed;
  width: calc(100% - 60px);
  right: 0;
  top: 0;
  margin-left: 60px;
  && {
    border-radius: 0;
  }
`;

export default TopMenuBarContainer;
