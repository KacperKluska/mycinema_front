import "./style.scss";
import ImageMinature from "../ImageMinature/ImageMinature";
import { useParams } from "react-router";
import { useState, useEffect } from "react/cjs/react.development";
import CommentInput from "../CommentInput/CommentInput";

export default function Movie() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const [type, setType] = useState();

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const movieResponse = await fetch(
          `http://localhost:8080/getFilm?filmId=${id}`
        );
        const movieData = await movieResponse.json();
        setMovie(movieData);
        console.log(movieData);
        const typeResponse = await fetch(
          `http://localhost:8080/getType?typeId=${movieData.type}`
        );
        const typeData = await typeResponse.json();
        setType(typeData);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [id]);

  // console.log(movie);
  // console.log(type);

  return (
    <div className="emptyContent">
      <div className="content">
        {loading && <div>Loading...</div>}
        <button className="goBackButton">&lt; Go back</button>
        {!loading && (
          <div>
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
                  {type}
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
                  autoPlay="0"
                  title="trailer"
                  src={movie.trailer.replace("watch?v=", "embed/")}
                ></iframe>
              </div>
            </section>
            <article>
              <div className="commentsSection">
                <h1 className="movieTitle">Comments:</h1>
                <CommentInput></CommentInput>
              </div>
            </article>
          </div>
        )}
      </div>
    </div>
  );
}
