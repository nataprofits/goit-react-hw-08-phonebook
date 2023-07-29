import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { ContactsList, Message } from './ContactList.styled';

import { getFilterValue } from '../../redux/filterSlice';
import { selectContactsItems } from '../../redux/contacts/contactsSlice';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(selectContactsItems);

  const filter = useSelector(getFilterValue);

  const getFilteredContacts = (contacts, filter) => {
   
    if (filter) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      return contacts;
    }
  };

  const filteredContacts = getFilteredContacts(contacts, filter);

  if (!filteredContacts || filteredContacts.length === 0) {
    return <Message>No contacts found</Message>;
  }
  return (
    <ContactsList>
      {filteredContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ContactsList>
  );
};
