import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 20px;

  &.active {
    color: rgb(217, 232, 64);
    text-shadow: -5px -3px 6px rgba(152,237,232,0.56);
    text-stroke: black;
  }
`;
export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;
