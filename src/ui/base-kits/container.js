import styled, { css } from 'styled-components';
import { space } from 'styled-system';

const Container = styled.div`
  ${space}
  text-align: ${props => (props.align ? props.align : 'left')};
  ${props =>
    props.main
      ? css`
          width: calc(100% - 60px);
          height: calc(100vh - 50px);
          position: fixed;
          bottom: 0;
          right: 0;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 16px;
          background-color: #f8f3fb;
        `
      : ''};
`;

export default Container;
