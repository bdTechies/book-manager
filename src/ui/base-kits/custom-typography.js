import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const CustomTypography = styled(Typography)`
  && {
    color: ${props => (props.customcolor ? props.customcolor : '')};
    font-size: ${props => (props.fontSize ? props.fontSize : '')};
    margin-top: ${props => (props.mt ? props.mt : '')};
    font-weight: 400;
    font-family: 'Arima Madurai';
  }
`;

export default CustomTypography;
