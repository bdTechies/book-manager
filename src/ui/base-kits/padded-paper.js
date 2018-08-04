import styled from 'styled-components';
import { Paper } from '@material-ui/core';

const PaddedPaper = styled(Paper)`
  padding: ${props => (props.padding ? props.padding : '16')}px;
  min-height: ${props => (props.minheight ? props.minheight + 'px' : '100%')};
`;

export default PaddedPaper;
