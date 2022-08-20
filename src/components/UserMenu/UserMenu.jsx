import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthOperations } from 'redux/user';
import { getUsername } from 'redux/user/auth-selector';
import { BoxMenu, Button, Img, UserName } from './UserMenu.styled';
import userIcon from 'img/user-icon.png';

export const UserMenu = () => {
  const user = useSelector(getUsername);

  const dispatch = useDispatch();

  const spreadOut = async () => {
    await dispatch(AuthOperations.logOut());
    window.localStorage.removeItem('persist:auth');
  };

  return (
    <BoxMenu>
      <UserName>
        <Img src={userIcon} alt="user icon" />
        <p>
          Welcome <b>{user ? user : 'XXX'}</b>
        </p>
      </UserName>

      <Button onClick={spreadOut}>Logout</Button>
    </BoxMenu>
  );
};
