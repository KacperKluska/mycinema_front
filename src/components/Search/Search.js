import "./style.scss";

export default function Search({ handleTyping }) {
  return (
    <input
      onChange={(e) => handleTyping(e.target.value)}
      placeholder="Search..."
      id="searchInput"
    />
  );
}
