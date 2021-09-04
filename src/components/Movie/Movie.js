import "./style.scss";
import ImageMinature from "../ImageMinature/ImageMinature";
import { useParams, Link } from "react-router-dom";
// import { useParams, Link } from "react-router";
import { useState, useEffect } from "react/cjs/react.development";
import CommentInput from "../CommentInput/CommentInput";
import Comment from "../Comment/Comment";

export default function Movie() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const [type, setType] = useState();
  const [comments, setComments] = useState();
  const [userRate, setUserRate] = useState(0);
  const [userComment, setUserComment] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        //movie
        const movieResponse = await fetch(
          `http://localhost:8080/getFilm?filmId=${id}`
        );
        const movieData = await movieResponse.json();
        setMovie(movieData);
        //movie type
        const typeResponse = await fetch(
          `http://localhost:8080/getType?typeId=${movieData.type}`
        );
        const typeData = await typeResponse.json();
        setType(typeData);
        //comments
        const commentsResponse = await fetch(
          `http://localhost:8080/getAllFilmComments?filmId=${movieData.id}`
        );
        const commentsData = await commentsResponse.json();
        setComments(commentsData);
        console.log(
          "🚀 ~ file: Movie.js ~ line 40 ~ getData ~ commentsData",
          commentsData
        );
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [id]);

  const addComment = async () => {
    console.log("wysyłam komentarz");
    const response = await fetch("http://localhost:8080/addComment", {
      method: "POST",
      body: JSON.stringify({
        userId: 1,
        filmId: id,
        userRate: userRate,
        text: userComment,
      }),
      headers: { "Content-Type": "application/json; charset=UTF=8" },
    });

    const responseText = await response.json();
    console.log(
      "🚀 ~ file: Movie.js ~ line 51 ~ addComment ~ responseText",
      responseText
    );
  };

  return (
    <div className="emptyContent">
      <div className="content">
        {loading && <div>Loading...</div>}
        <Link to="/">
          <button className="goBackButton">&lt; Go back</button>
        </Link>
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
                <CommentInput
                  handleNumber={setUserRate}
                  handleText={setUserComment}
                  handleButtonCLick={addComment}
                />
              </div>
            </article>
            <section>
              {comments.map((comment) => {
                return <Comment rate={comment.rate}>{comment.text}</Comment>;
              })}
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
