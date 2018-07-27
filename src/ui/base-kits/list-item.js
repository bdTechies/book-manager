import styled from 'styled-components';

const ListItem = styled.li`
  background: palevioletred;
  color: #fff;
  padding: 8px 16px;
  margin-bottom: 8px;
  border-radius: 4px;
  &:last-child {
    margin-bottom: 0;
  }
  span {
    font-size: 0.6rem;
    margin-left: 8px;
  }
`;

export default ListItem;
