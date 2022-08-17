import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from './../../redux/user/auth-selector';

export const PrivateRouter = ({ children }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return <>{isLoggedIn ? children : <Navigate to="/sing-in" replace />}</>;
};
