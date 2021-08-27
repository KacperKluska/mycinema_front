import "./style.scss";

export default function SectionHeader({ children }) {
  return (
    <div className="sectionHeader">
      <h1>{children}</h1>
    </div>
  );
}
