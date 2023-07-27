import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { ContactList } from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { Title } from '../components/App/App.styled';
import { selectIsLoading } from '../redux/contacts/contactsSlice';
import { selectError } from '../redux/contacts/contactsSlice';
import { Loader } from 'components/Loader/Loader';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && <b>Request in progress...</b>}

      <Title>Add new contact</Title>
      <ContactForm />
      {isLoading && <Loader />}
      <ContactList />
      <Title>Find the desired contact</Title>
      <Filter />
    </>
  );
}