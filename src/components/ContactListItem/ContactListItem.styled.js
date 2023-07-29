import styled from 'styled-components';

export const ListItem = styled.li`
    display: flex;
 justify-content: space-between;
 align-items: center;

 &:not(:last-child) {
   padding-bottom: 5px;
   border-bottom: 1px solid black;
   margin-bottom: 5px;
 }
`;
