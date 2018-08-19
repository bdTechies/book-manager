import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { size } from 'styled-system';

const CustomGrid = styled(Grid)`
  && {
    ${size};
    height: ${props => (props.customheight ? props.customheight : 'auto')};
  }
`;

export default CustomGrid;
