import React from 'react';
import { NavBox, NavList, NLink } from './Nav.styled';
import { getIsLoggedIn } from './../../redux/user/auth-selector';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu/UserMenu';

// NLink === NavLink

export const Nav = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <NavBox>
      <NavList>
        <li>
          <NLink to={'/'}>Home</NLink>
        </li>
        {isLoggedIn && (
          <li>
            <NLink to={'/contacts'}>List of contacts</NLink>
          </li>
        )}
      </NavList>
      {!isLoggedIn ? (
        <NavList>
          <li>
            <NLink to={'/sing-in'}>Sing in</NLink>
          </li>
          <li>
            <NLink to={'/sing-up'}>Sing up</NLink>
          </li>
        </NavList>
      ) : (
        <UserMenu />
      )}
    </NavBox>
  );
};
