import styled, { css } from 'styled-components';

const MenuList = styled.ul`
  margin: 0;
  padding: 0;
  width: 250px;
  list-style: none;
  ${props =>
    props.vertical
      ? css`
          height: 100vh;
          width: 60px;
          position: fixed;
          top: 0;
          left: 0;
          background-image: linear-gradient(
            to top,
            #143584,
            #2e3184,
            #3f2d82,
            #4e2780,
            #5c1f7c
          );
        `
      : ''};

  ${props =>
    props.control
      ? css`
          display: inline;
          position: absolute;
          right: 16px;
          width: auto;
          line-height: 0;
          top: 50%;
          transform: translateY(-50%);
        `
      : ''};
`;

export default MenuList;
