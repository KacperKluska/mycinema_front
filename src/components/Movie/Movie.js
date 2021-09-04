import "./style.scss";
import ImageMinature from "../ImageMinature/ImageMinature";

export default function Movie({ handleMovie, movie, type }) {
  return (
    <div className="content">
      <button className="goBackButton" onClick={handleMovie}>
        &lt; Go back
      </button>
      <section className="filmMinature">
        <ImageMinature url={movie.img} />
        <section className="filmDescription">
          <h1 className="movieTitle">{movie.title}</h1>
          <div className="descriptionLine">
            <label className="descriptionLabel">Release: </label>
            {movie.release}
          </div>
          <div className="descriptionLine">
            <label className="descriptionLabel">Length: </label>
            {movie.length}
          </div>
          <div className="descriptionLine">
            <label className="descriptionLabel">PEGI: </label>
            {movie.pegi}
          </div>
          <div className="descriptionLine">
            <label className="descriptionLabel">Critics rate: </label>
            {movie.userRate}/10
          </div>
          <div className="descriptionLine">
            <label className="descriptionLabel">Type: </label>
            {type.type} {/* {type:x, id: x} */}
          </div>
        </section>
      </section>
      <section>
        <div className="movieSection">
          <h1 className="movieTitle">Description:</h1>
          {movie.description}
        </div>
      </section>
      <section>
        <div className="movieSection centeredVideo">
          <iframe
            width="665"
            height="500"
            muted="0"
            // src="https://www.youtube.com/embed/tgbNymZ7vqY"
            src={movie.trailer.replace("watch?v=", "embed/")}
          ></iframe>
          {/* {movie.trailer.replace("watch?v=", "embed/")} */}
        </div>
      </section>
    </div>
  );
}
