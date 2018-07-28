import styled from 'styled-components';

const FixedVerticalDevider = styled.div`
  position: fixed;
  width: 1px;
  height: 50vh;
  top: 50%;
  left: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
`;

export default FixedVerticalDevider;
