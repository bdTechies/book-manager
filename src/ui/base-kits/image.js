import styled from 'styled-components';

const Image = styled.img`
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : 'auto')};
`;

export default Image;
