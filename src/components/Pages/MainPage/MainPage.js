import { useEffect, useState } from "react";
import FilmMinature from "../../FilmMinature/FilmMinature";
import SectionHeader from "../../SectionHeader/SectionHeader";
import Search from "../../Search/Search";
import "./style.scss";
import Pagination from "../../Pagination/Pagination";
import Movie from "../../Movie/Movie";

export default function MainPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filmsPerPage] = useState(4);
  const [searchText, setSearchText] = useState("");
  const [seeMovie, setSeeMovie] = useState(false);
  const [currentMovieId, setcurrentMovieId] = useState(0);

  const handleMovie = () => {
    setSeeMovie((prev) => (prev = !prev));
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [currentPage]);

  const useFilmList = (filmsURL, filmsTypesURL, page, query) => {
    const [films, setFilms] = useState([]);
    const [filmsTypes, setFilmsTypes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      async function getData() {
        try {
          setLoading(true);
          const filmsResponse = await fetch(
            `${filmsURL}?page=${page - 1}&q=${query}`
          );
          const typesResponse = await fetch(filmsTypesURL);
          const filmsData = await filmsResponse.json();
          const typesData = await typesResponse.json();
          setFilms(filmsData);
          setFilmsTypes(typesData);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      }
      getData();
    }, [filmsURL, filmsTypesURL, page, query]);

    return [films, filmsTypes, loading];
  };

  const [films, filmsTypes, loading] = useFilmList(
    "http://localhost:8080/getAllFilms",
    "http://localhost:8080/getTypes",
    currentPage,
    searchText
  );
  // console.log(filmsTypes);
  // console.log(films);

  const getFilmType = (id) => filmsTypes.find((type) => type.id === id);

  return (
    <div className="emptyContent">
      {!seeMovie && (
        <article style={{ width: "100%" }}>
          <Search handleTyping={setSearchText} />
          <div className="content">
            <SectionHeader>Films</SectionHeader>
            {loading && <div>Loading...</div>}
            {!loading &&
              films.filmEntities.map((film) => {
                return (
                  <FilmMinature
                    key={film.id}
                    film={film}
                    type={getFilmType(film.type)}
                    handleMovie={handleMovie}
                    handleMovieId={setcurrentMovieId}
                  />
                );
              })}
          </div>
          <Pagination
            itemsPerPage={filmsPerPage}
            totalItems={films.totalMovies}
            paginate={paginate}
            currentPage={currentPage}
          />
        </article>
      )}
      {seeMovie && (
        <Movie
          handleMovie={handleMovie}
          movie={films.filmEntities.find((m) => m.id === currentMovieId)}
        />
      )}
    </div>
  );
}
