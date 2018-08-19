import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import { size, width } from 'styled-system';

const PaddedPaper = styled(Paper)`
  padding: ${props => (props.padding ? props.padding : '16')}px;
  min-height: ${props => (props.minheight ? props.minheight + 'px' : 'auto')};
  display: flex;
  flex-direction: row;
  ${size};
  ${width};
`;

export default PaddedPaper;
