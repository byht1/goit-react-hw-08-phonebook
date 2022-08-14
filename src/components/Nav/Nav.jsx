import React from 'react';
import { NavBox, NavList, NLink } from './Nav.styled';

// NLink === NavLink

export const Nav = () => {
  return (
    <NavBox>
      <NavList>
        <li>
          <NLink to={'/'}>Home</NLink>
        </li>
        <li>
          <NLink to={'/contacts'}>List of contacts</NLink>
        </li>
      </NavList>
      <NavList>
        <li>
          <NLink to={'/sing-in'}>Sing in</NLink>
        </li>
        <li>
          <NLink to={'/sing-up'}>Sing up</NLink>
        </li>
      </NavList>
    </NavBox>
  );
};
