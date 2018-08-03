import styled from 'styled-components';

const Container = styled.div`
  text-align: ${props => (props.align ? props.align : 'left')};
  padding-left: ${props => (props.pl ? props.pl : '')};
  padding-top: ${props => (props.pt ? props.pt : '')};
`;

export default Container;
