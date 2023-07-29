import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  gap: 15px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: -20px;
    top: 10px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: black;
  }
`;
