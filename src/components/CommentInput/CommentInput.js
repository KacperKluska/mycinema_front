import "./style.scss";

export default function CommentInput() {
  return (
    <div>
      <input
        className="userRate"
        type="number"
        max="10"
        min="0"
        step=".1"
        placeholder="Your rate..."
      ></input>
      <input
        className="userComment"
        type="text"
        maxLength="256"
        placeholder="Write a comment..."
      ></input>
    </div>
  );
}
