import { useEffect, useState } from "react";
import FilmMinature from "../../FilmMinature/FilmMinature";
import Search from "../../Search/Search";
import "./style.scss";

export default function MainPage() {
  const useFilmList = (url) => {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      async function getData() {
        try {
          const response = await fetch(url);
          const data = await response.json();
          setFilms(data);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      }
      getData();
    }, [url]);

    return [films, loading];
  };

  const [films, loading] = useFilmList("http://localhost:8080/films");
  console.log(films);

  // const [films, setFilms] = useState(null);
  // const [loading, setLoading] = useState(true);

  // async function getFilms(url) {
  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     console.log(data);
  //     setFilms(data);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // getFilms("https://random-data-api.com/api/beer/random_beer?size=10");
  // console.log(films);

  return (
    <div className="emptyContent">
      <Search />
      <div className="content">
        {loading && <div>Loading...</div>}
        {!loading &&
          films.map((film) => {
            return <FilmMinature key={film.id} film={film} />;
          })}
      </div>
    </div>
  );
}
