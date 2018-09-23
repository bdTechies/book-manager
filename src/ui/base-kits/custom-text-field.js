import styled from 'styled-components';
import { space } from 'styled-system';
import { TextField } from '@material-ui/core';

const CustomTextField = styled(TextField)`
  && {
    ${space};
    label {
      font-size: 1.1rem;
      font-family: 'Arima Madurai';
      color: rgba(92, 31, 124, 0.5);
    }
  }
`;

export default CustomTextField;
