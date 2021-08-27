import "./style.scss";

export default function ImageMinature({ url }) {
  return (
    <div className="imageMinatureDiv">
      <img className="imageMinature" src={url} alt="img :'("></img>
    </div>
  );
}
