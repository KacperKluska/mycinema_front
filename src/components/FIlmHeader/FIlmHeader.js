import { Link } from "react-router-dom";
import "./style.scss";

export default function FilmHeader({ filmId, children }) {
  return (
    <h1 className="filmHeader">
      <Link to={`movies/${filmId}`}>{children}</Link>
    </h1>
  );
}
