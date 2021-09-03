import { Link } from "react-router-dom";
import "./style.scss";

export default function FilmHeader({ filmId, children }) {
  return (
    <h1 className="filmHeader">
      <Link /*className="linkStyle"*/ to={filmId}>{children}</Link>
    </h1>
  );
}
