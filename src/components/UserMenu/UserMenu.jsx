import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AuthOperations } from 'redux/user';
import { getUsername } from 'redux/user/auth-selector';
import { BoxMenu, Button, Img, UserName } from './UserMenu.styled';
import userIcon from 'img/user-icon.png';

export const UserMenu = () => {
  const user = useSelector(getUsername);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const spreadOut = async () => {
    await dispatch(AuthOperations.logOut());
    navigate('/sing-in', { replace: true });
    console.log('Успішний виход з системи');
  };

  return (
    <BoxMenu>
      <UserName>
        <Img src={userIcon} alt="user icon" />
        <p>
          Welcome <b>{user}</b>
        </p>
      </UserName>

      <Button onClick={spreadOut}>Logout</Button>
    </BoxMenu>
  );
};
