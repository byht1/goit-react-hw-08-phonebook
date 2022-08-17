import React from 'react';
import { FormNewContacts } from 'components/FormNewContacts/FormNewContacts';
import { SearchContacts } from 'components/SearchContacts/SearchContacts';
import { ContactsWrapper, Title, CartWrapper } from './Contacts.styled';
import { ContactList } from 'components/ContactList/ContactList';

export default function Contacts() {
  return (
    <ContactsWrapper>
      <Title>Your phone book</Title>
      <SearchContacts />
      <CartWrapper>
        <FormNewContacts />
        <ContactList />
      </CartWrapper>
    </ContactsWrapper>
  );
}
