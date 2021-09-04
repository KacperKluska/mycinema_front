import Button from "../Button/Button";
import "./style.scss";

export default function CommentInput({
  handleNumber,
  handleText,
  handleButtonCLick,
}) {
  return (
    <form className="commentForm" onSubmit={handleButtonCLick}>
      <div className="commentUpperRow">
        <input
          className="userRate"
          type="number"
          max="10"
          min="0"
          step=".1"
          placeholder="Your rate..."
          onChange={(e) => handleNumber(e.target.value)}
          required
        ></input>
        <Button color="blue" type="submit">
          Comment!
        </Button>
      </div>
      <textarea
        className="userComment"
        maxLength="256"
        placeholder="Write a comment..."
        onChange={(e) => handleText(e.target.value)}
        required
      ></textarea>
    </form>
  );
}
