import { useEffect, useState } from "react";
import FilmMinature from "../../FilmMinature/FilmMinature";
import SectionHeader from "../../SectionHeader/SectionHeader";
import Search from "../../Search/Search";
import "./style.scss";
import Pagination from "../../Pagination/Pagination";

export default function MainPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filmsPerPage] = useState(4);
  const [searchText, setSearchText] = useState("");

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

  const [films, loading] = useFilmList("http://localhost:8080/getAllFilms");
  const [przefiltrowane, setPrzefiltrowane] = useState(films);
  // console.log(films);

  const indexOfLastFilm = currentPage * filmsPerPage;
  const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;
  console.log(indexOfLastFilm);
  // const currentFilms = films.slice(indexOfFirstFilm, indexOfLastFilm);

  const warunek = (film, index) => {
    if (
      (searchText === "" &&
        index >= indexOfFirstFilm &&
        index < indexOfLastFilm) ||
      (searchText !== "" &&
        film.title.toLowerCase().includes(searchText.toLowerCase()))
    ) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    setPrzefiltrowane(films.filter(warunek));
    console.log(przefiltrowane);
  }, [searchText]);

  return (
    <div className="emptyContent">
      <Search handleTyping={setSearchText} />
      <div className="content">
        <SectionHeader>Films</SectionHeader>
        {loading && <div>Loading...</div>}
        {!loading &&
          films.filter(warunek).map((film) => {
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
