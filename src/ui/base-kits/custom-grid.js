import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { size, space } from 'styled-system';

const CustomGrid = styled(Grid)`
  && {
    ${size};
    ${space};
    height: ${props => (props.customheight ? props.customheight : 'auto')};
  }
`;

export default CustomGrid;
