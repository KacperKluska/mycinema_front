import "./style.scss";

export default function Header() {
  return (
    <header id="header">
      <h1 id="mainLogo">myCinema</h1>
      <nav className="userStatusNavigation">
        <ul>
          <li>Sign in</li>
          <li>Sign up</li>
        </ul>
      </nav>
    </header>
  );
}
