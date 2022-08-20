import React, { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { TailSpin } from 'react-loader-spinner';
import { BsPencilFill } from 'react-icons/bs';
import {
  Elements,
  NameContacts,
  Button,
  IconBox,
  ButtonBox,
} from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import { ModalCorrection } from 'components/ModalCorrection/ModalCorrection';

export const Contact = ({ data: { id, name, number } }) => {
  const [icon, setIcon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIcon(name[0].toUpperCase());
  }, [name]);

  const onDeleteContact = contactId => {
    setLoading(true);
    dispatch(contactsOperations.deleteContact(contactId));
    setLoading(false);
  };

  return (
    <Elements>
      <NameContacts>
        <IconBox>{icon}</IconBox>
        {name}: {number}
      </NameContacts>
      <ButtonBox>
        <Button
          type="button"
          onClick={() => onDeleteContact(id)}
          dispatch={loading}
        >
          {loading ? (
            <TailSpin width={20} height={20} />
          ) : (
            <MdDelete size={20} />
          )}
        </Button>
        <Button type="button" onClick={() => setIsModal(true)}>
          <BsPencilFill size={20} />
        </Button>
      </ButtonBox>

      {isModal && (
        <ModalCorrection
          name={name}
          number={number}
          id={id}
          close={setIsModal}
        />
      )}
    </Elements>
  );
};
