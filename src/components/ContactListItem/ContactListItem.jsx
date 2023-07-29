import PropTypes from 'prop-types';
import { ListItem } from './ContactListItem.styled';
import { ButtonAddDeleteContact } from 'components/ContactForm/ContactForm.styled';
import { deleteContact } from '../../redux/contacts/contacts-operations';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contacts-operations';
export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = async () => {
    await dispatch(deleteContact(contact.id));
    dispatch(fetchContacts());
  };

  return (
    <>
      <ListItem key={contact.id}>
        {contact.name} : {contact.number}
        <ButtonAddDeleteContact onClick={handleDeleteContact}>
          Delete
        </ButtonAddDeleteContact>
      </ListItem>
    </>
  );
};
ContactListItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
