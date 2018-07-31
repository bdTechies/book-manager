import styled from 'styled-components';

const MainMenuItem = styled.li`
  font-size: 20px;
  margin-bottom: 8px;
  font-family: 'Arima Madurai';
  text-transform: lowercase;
  a {
    width: 100%;
    color: #ffffff;
    text-align: right;
    display: inline-block;
    text-decoration: none;
    outline: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    cursor: pointer;

    span {
      transition: all ease-in-out 0.2s;
    }

    &:hover {
      span {
        padding-right: 4px;
      }
    }

    &:visited,
    &:active {
      color: #ffffff;
      outline: none;
    }
  }
`;

export default MainMenuItem;
