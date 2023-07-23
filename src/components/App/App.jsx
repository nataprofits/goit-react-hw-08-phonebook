
import { Title, Container, Div } from './App.styled';
import ContactForm from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/contactsSlice';

export default function App() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch])
  return (
 
    <Container>
    <Div>
    <Title>Phonebook</Title>
    <ContactForm />
    </Div>
    <Div>
    <Title>Contacts</Title>
    <Filter />
    {isLoading && !error && <b>Request in progress...</b>}
    <ContactList />
  </Div>
  </Container>
  );
}