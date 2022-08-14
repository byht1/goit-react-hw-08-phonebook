import React, { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { Elements, NameContacts, Button, IconBox } from './ContactList.styled';

export const Contact = ({ data: { name, number } }) => {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    setIcon(name[0].toUpperCase());
  }, [name]);

  return (
    <Elements>
      <NameContacts>
        <IconBox>{icon}</IconBox>
        {name}: {number}
      </NameContacts>
      <Button type="button">
        <MdDelete size={20} />
      </Button>
    </Elements>
  );
};
