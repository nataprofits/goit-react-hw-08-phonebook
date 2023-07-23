import PropTypes from 'prop-types';
import { List,ListItem, Button } from './ContactItem.styled';
import { deleteContact } from '../../redux/operations';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/operations';

export const ContactItem = ({ contact }) => {
 
  const dispatch = useDispatch();

  const handleDeleteContact = async () => {
    await dispatch(deleteContact(contact.id));
    dispatch(fetchContacts());
  };

  return (
    <List>
      <ListItem key={contact.id}>
        {contact.name} : {contact.phone} 
        <Button
          onClick={handleDeleteContact}
          
        >
          Delete
        </Button>
      </ListItem>
    </List>
  );
};
ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};