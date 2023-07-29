// import { NavLink } from 'react-router-dom';
import { Nav,Link } from 'components/Navigation/Navigation.styled';
export default function AuthNav() {
  return (
    <Nav>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </Nav>
  );
}
