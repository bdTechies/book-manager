import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { space } from 'styled-system';

const CustomButton = styled(Button)`
  && {
    margin-right: ${props => (props.mr ? props.mr + 'px' : '')};
    margin-left: ${props => (props.ml ? props.ml + 'px' : '')};
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.palette.primary.dark};
    }
    ${space};
  }
`;

export default CustomButton;
