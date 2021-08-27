import "./style.scss";
import ImageMinature from "../ImageMinature/ImageMinature";
import FilmHeader from "../FIlmHeader/FIlmHeader";

export default function FilmMinature({ film }) {
  return (
    <article className="filmMinature">
      <ImageMinature url={film.img} />
      <section className="filmDescription">
        <FilmHeader>{film.title}</FilmHeader>
        <div className="descriptionLine">
          <label className="descriptionLabel">Release: </label>
          {film.release}
        </div>
        <div className="descriptionLine">
          <label className="descriptionLabel">Length: </label>
          {film.length}
        </div>
        <div className="descriptionLine">
          <label className="descriptionLabel">PEGI: </label>
          {film.pegi}
        </div>
        <div className="descriptionLine">
          <label className="descriptionLabel">Critics rate: </label>
          {film.userRate}/10
        </div>
        <div className="descriptionLine">
          <label className="descriptionLabel">Description: </label>
          {film.description}
        </div>
      </section>
    </article>
  );
}
