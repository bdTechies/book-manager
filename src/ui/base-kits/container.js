import styled from 'styled-components';

const Container = styled.div`
  text-align: ${props => (props.align ? props.align : 'left')};
  padding-left: ${props => (props.pl ? props.pl : '')};
`;

export default Container;
