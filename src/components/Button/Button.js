import "./style.scss";

export default function Button({ type, color, children }) {
  return (
    <button
      type={type}
      className={
        color === "red"
          ? "button red"
          : color === "blue"
          ? "button blue"
          : "button green"
      }
    >
      {children}
    </button>
  );
}
