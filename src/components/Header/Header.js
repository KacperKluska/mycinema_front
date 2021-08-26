import { useContext } from "react";
import { Link } from "react-router-dom";
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
      <Link className="linkStyle" to="/">
        <h1 id="mainLogo">myCinema</h1>
      </Link>
      <nav className="userStatusNavigation">
        {!userLogged && (
          <ul>
            <Link className="linkStyle" to="/login" onClick={LogIn}>
              Sign in
            </Link>
            <Link className="linkStyle" to="/login">
              Sign up
            </Link>
            {/* <li onClick={LogIn}>Sign in</li>
            <li>Sign up</li> */}
          </ul>
        )}
        {userLogged && (
          <ul>
            <Link className="linkStyle" to="/account">
              Account
            </Link>
            <Link className="linkStyle" to="/" onClick={LogOut}>
              Log out
            </Link>
            {/* <li>Account</li>
            <li onClick={LogOut}>Log out</li> */}
          </ul>
        )}
      </nav>
    </header>
  );
}
