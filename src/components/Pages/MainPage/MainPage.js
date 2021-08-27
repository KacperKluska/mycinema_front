import { useEffect, useState } from "react";
import FilmMinature from "../../FilmMinature/FilmMinature";
import SectionHeader from "../../SectionHeader/SectionHeader";
import Search from "../../Search/Search";
import "./style.scss";
import Pagination from "../../Pagination/Pagination";

export default function MainPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filmsPerPage] = useState(4);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [currentPage]);

  const useFilmList = (url) => {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      async function getData() {
        try {
          setLoading(true);
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

  const indexOfLastFilm = currentPage * filmsPerPage;
  const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;
  const currentFilms = films.slice(indexOfFirstFilm, indexOfLastFilm);

  return (
    <div className="emptyContent">
      <Search />
      <div className="content">
        <SectionHeader>Films</SectionHeader>
        {loading && <div>Loading...</div>}
        {!loading &&
          currentFilms.map((film) => {
            return <FilmMinature key={film.id} film={film} />;
          })}
      </div>
      <Pagination
        itemsPerPage={filmsPerPage}
        totalItems={films.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}
