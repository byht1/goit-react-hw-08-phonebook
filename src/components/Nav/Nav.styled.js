import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBox = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const NLink = styled(NavLink)`
  font-size: 20px;
  color: #fff;

  &.active {
    color: red;
  }
  &:hover,
  &:focus {
    color: red;
  }
`;
