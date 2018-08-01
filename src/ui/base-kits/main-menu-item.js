import styled from 'styled-components';

const MainMenuItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 50px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
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
    cursor: pointer;

    &:visited,
    &:active {
      color: #ffffff;
      outline: none;
    }
  }

  img {
    width: 24px;
    height: auto;
  }
`;

export default MainMenuItem;
