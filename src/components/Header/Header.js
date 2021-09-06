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
          </ul>
        )}
        {userLogged && (
          <ul>
            <Link className="linkStyle" to="/admin/users_list">
              Users list
            </Link>
            <Link className="linkStyle" to="/admin/comments_list">
              Comments
            </Link>
            <Link className="linkStyle" to="/admin/upload_movie">
              Upload Movie
            </Link>
            <Link className="linkStyle" to="/account">
              Account
            </Link>
            <Link className="linkStyle" to="/" onClick={LogOut}>
              Log out
            </Link>
          </ul>
        )}
      </nav>
    </header>
  );
}
