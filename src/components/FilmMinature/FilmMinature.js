import "./style.scss";
import ImageMinature from "../ImageMinature/ImageMinature";
import FilmHeader from "../FIlmHeader/FIlmHeader";

export default function FilmMinature({ film }) {
  return (
    <article className="filmMinature">
      <ImageMinature url={film.img} />
      <section className="filmDescription">
        <FilmHeader>{film.title}</FilmHeader>
        <label>Release: {film.release}</label>
        <label>Length: {film.length}</label>
        <label>PEGI: {film.pegi}</label>
        <label>Critics rate: {film.userRate}/10</label>
      </section>
    </article>
  );
}
