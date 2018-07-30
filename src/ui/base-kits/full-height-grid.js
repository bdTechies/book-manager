import styled, { css } from 'styled-components';
import { Grid } from '@material-ui/core';

const FullHeightGrid = styled(Grid)`
  height: 100vh;
  ${props =>
    props.nocopy
      ? css`
          -webkit-user-select: none;
        `
      : ''};
`;

export default FullHeightGrid;
