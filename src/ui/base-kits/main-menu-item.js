import styled from 'styled-components';

const MainMenuItem = styled.li`
  a {
    width: 100%;
    color: #ffffff;
    display: inline-flex;
    height: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    outline: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    cursor: pointer;

    &:visited,
    &:active {
      color: #ffffff;
      outline: none;
    }
  }
`;

export default MainMenuItem;
