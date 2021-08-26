import "./style.scss";
import Login from "../../Login/Login";
import Register from "../../Register/Register";

export default function LoginPage() {
  return (
    <div className="emptyContent">
      <article className="content">
        <Login />
        <Register />
      </article>
    </div>
  );
}
