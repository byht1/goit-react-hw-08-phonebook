import React, { useEffect, useState } from 'react';
import { Contact } from './Contact';
import { ContactListWrapper, Title, List } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from './../../redux/contacts/contacts-selector';
import { ErrorContactList } from 'components/ErrorContactList/ErrorContactList';
import { contactsOperations } from 'redux/contacts';
import { useSearchParams } from 'react-router-dom';

// const contactsList = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export const ContactList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('search') ?? '';
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.contactsListServer());
  }, [dispatch]);

  const renderContacts = filter
    ? contacts.filter(x => x.name.toLowerCase().includes(filter.toLowerCase()))
    : contacts;

  return (
    <ContactListWrapper>
      <Title>Contact List</Title>

      {contacts.length === 0 ? (
        <ErrorContactList />
      ) : (
        <List>
          {renderContacts.map(x => (
            <Contact key={x.id} data={x} />
          ))}
        </List>
      )}
    </ContactListWrapper>
  );
};
