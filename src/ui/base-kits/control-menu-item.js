import styled from 'styled-components';

const ControlMenuItem = styled.li`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }

  a {
    width: 100%;
    color: #ffffff;
    display: inline-block;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    line-height: 0;
  }
`;

export default ControlMenuItem;
