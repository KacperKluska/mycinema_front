import { useContext } from "react";
import { UserStatusContext } from "../Context/UserStatusContext";
import "./style.scss";

export default function Header() {
  const [userLogged, setUserLogged] = useContext(UserStatusContext);
  const LogIn = () => {
    setUserLogged(true);
  };

  const LogOut = () => {
    setUserLogged(false);
  };

  return (
    <header id="header">
      <h1 id="mainLogo">myCinema</h1>
      <nav className="userStatusNavigation">
        {!userLogged && (
          <ul>
            <li onClick={LogIn}>Sign in</li>
            <li>Sign up</li>
          </ul>
        )}
        {userLogged && (
          <ul>
            <li onClick={LogOut}>Log out</li>
          </ul>
        )}
      </nav>
    </header>
  );
}
