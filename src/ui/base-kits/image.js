import styled from 'styled-components';

const Image = styled.img`
  width: ${props => (props.width ? props.width + 'px' : '100%')};
  height: ${props => (props.height ? props.height + 'px' : 'auto')};
`;

export default Image;
