import styled, { css } from 'styled-components';

const MenuList = styled.ul`
  margin: 0;
  padding: 0;
  width: 250px;
  list-style: none;
  ${props =>
    props.height
      ? css`
          height: props.height;
        `
      : ''};
`;

export default MenuList;
