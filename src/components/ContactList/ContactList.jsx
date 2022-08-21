import { Contact } from './Contact';
import { ContactListWrapper, Title, List } from './ContactList.styled';
import { ErrorContactList } from 'components/ErrorContactList/ErrorContactList';
import { useContactList } from 'hook/useContactList';
import Skeleton from 'components/Loader/Skeleton';

export const ContactList = () => {
  const { renderContacts, contacts, isLoadingContacts } = useContactList();

  return (
    <ContactListWrapper>
      <Title>Contact List</Title>

      {isLoadingContacts ? (
        <Skeleton />
      ) : contacts.length === 0 ? (
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
