import React from 'react';
import { BiErrorAlt } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { getErrorMessage } from 'redux/contacts/contacts-selector';
import {
  ErrorMessageBox,
  TextError,
  ErrorStatus,
  ErrorTitle,
} from './ErrorMessage.styled';

export default function ErrorMessage() {
  const massege = useSelector(getErrorMessage);

  return (
    <ErrorMessageBox>
      <BiErrorAlt color="red" size={40} />
      <div>
        <TextError>Server connection error.</TextError>
        {massege && (
          <ErrorStatus>
            <ErrorTitle>Error status:</ErrorTitle> {massege}
          </ErrorStatus>
        )}
      </div>
    </ErrorMessageBox>
  );
}
// server connection error
