import { useDispatch, useSelector } from "react-redux"
import { selectUserName } from "../../redux/auth/auth-selectors";
import { logOut } from "../../redux/auth/auth-operations";
import defaultAvatar from "./default-user-img.png";
import { UserMenuWrap, WelcomeText } from "./UserMenu.styled";
import { ButtonAddDeleteContact } from "components/ContactForm/ContactForm.styled";

export default function UserMenu() {
    const dispatch = useDispatch();
    const avatar = defaultAvatar;
    const name = useSelector(selectUserName);

    const handleLogOut = () => dispatch(logOut());
    return (
        <UserMenuWrap>
           <img src={avatar} width="30" alt={name} />
            <WelcomeText>Welcome, {name}</WelcomeText>
            <ButtonAddDeleteContact type="button" onClick ={handleLogOut}>Log Out</ButtonAddDeleteContact>
        </UserMenuWrap>
    )
}