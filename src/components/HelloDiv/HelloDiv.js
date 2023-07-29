
import { HelloTitle, HelloWrap, Text } from './HelloDiv.styled';
export default function HelloDiv() {
  return (
    <HelloWrap>
      <HelloTitle>Phonebook</HelloTitle>
      <Text>
        {' '}
        Please, <a href="/goit-react-hw-08-phonebook/register">
          {' '}
          Register
        </a> or <a href="/goit-react-hw-08-phonebook/login">Log In</a> to have
        access to the Contacts Book
      </Text>
    
    </HelloWrap>
  );
}
