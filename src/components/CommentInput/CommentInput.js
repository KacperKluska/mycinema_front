import Button from "../Button/Button";
import "./style.scss";
import { useContext } from "react";
import { UserStatusContext } from "../Context/UserStatusContext";

export default function CommentInput({
  handleNumber,
  handleText,
  handleButtonCLick,
}) {
  const [userLogged] = useContext(UserStatusContext);

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
          disabled={userLogged ? false : true}
        ></input>
        {!userLogged && (
          <div className="needToBeLogged">
            You need to be logged in to post a comment
          </div>
        )}
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
        disabled={userLogged ? false : true}
      ></textarea>
    </form>
  );
}
