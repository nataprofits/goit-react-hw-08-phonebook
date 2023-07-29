// import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Link, Nav} from './Navigation.styled';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </Nav>
  );
}
