import React from 'react';
import { BiErrorAlt } from 'react-icons/bi';
import { ErrorBox } from './ErrorContactList.styled';

export const ErrorContactList = () => {
  return (
    <ErrorBox>
      <BiErrorAlt color="red" size={40} />
      <p>There is No contact in your contacts list!</p>
    </ErrorBox>
  );
};
