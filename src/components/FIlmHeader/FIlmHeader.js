import { Link } from "react-router-dom";
import "./style.scss";

export default function FilmHeader({
  filmId,
  children,
  handleMovie,
  handleMovieId,
}) {
  const handleClick = () => {
    handleMovie();
    handleMovieId(filmId);
  };

  return (
    <h1 className="filmHeader" onClick={handleClick}>
      {children}
    </h1>
  );
}
