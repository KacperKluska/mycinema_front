export default function Movie({ handleMovie, movie }) {
  return (
    <div>
      Hi {movie.title} <button onClick={handleMovie}>Go back</button>
    </div>
  );
}
