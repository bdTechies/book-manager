import styled from 'styled-components';

const Container = styled.div`
  text-align: ${props => (props.align ? props.align : 'left')};
`;

export default Container;
