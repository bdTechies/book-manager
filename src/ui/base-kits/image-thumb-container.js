import styled from 'styled-components';

const ImageThumbContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: ${props => (props.height ? props.height : '300')}px;
  width: ${props => (props.width ? props.width : '200')}px;
  border: 4px solid rgba(92, 31, 124, 0.5);
`;

export default ImageThumbContainer;
