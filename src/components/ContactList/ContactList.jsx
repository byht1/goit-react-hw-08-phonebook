import React, { useState } from 'react';
import { Contact } from './Contact';
import { ContactListWrapper, Title, List } from './ContactList.styled';

const contactsList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const ContactList = () => {
  const [first] = useState(contactsList);
  return (
    <ContactListWrapper>
      <Title>Contact List</Title>

      <List>
        {first.map(x => (
          <Contact key={x.number} data={x} />
        ))}
      </List>
    </ContactListWrapper>
  );
};
