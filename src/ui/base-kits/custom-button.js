import styled from 'styled-components';
import { Button } from '@material-ui/core';

const CustomButton = styled(Button)`
  && {
    margin-right: ${props => (props.mr ? props.mr + 'px' : '')};
    margin-left: ${props => (props.ml ? props.ml + 'px' : '')};
  }
`;

export default CustomButton;
