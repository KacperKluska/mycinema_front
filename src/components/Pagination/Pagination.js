import "./style.scss";

export default function Pagination({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pages">
      <ul>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              currentPage === number ? "pageNumberBox active" : "pageNumberBox"
            }
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
}
