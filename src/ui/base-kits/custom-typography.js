import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { space } from 'styled-system';

const CustomTypography = styled(Typography)`
  && {
    color: ${props => (props.customcolor ? props.customcolor : '')};
    font-size: ${props => (props.fontSize ? props.fontSize : '')};
    margin-top: ${props => (props.mt ? props.mt : '')};
    font-weight: 400;
    font-family: ${props =>
      props.customfont === 'Arima' ? 'Arima Madurai' : ''};
    white-space: ${props => (props.whitespace ? props.whitespace : 'normal')};
    ${space};
  }
`;

export default CustomTypography;
