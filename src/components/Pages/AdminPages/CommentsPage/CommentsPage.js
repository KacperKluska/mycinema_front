import { useEffect, useState } from "react/cjs/react.development";
import SectionHeader from "../../../SectionHeader/SectionHeader";
import Comment from "../../../Comment/Comment";
import Button from "../../../Button/Button";
import "./style.scss";

export default function CommentsPage() {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    console.log("Downloading comments...");
    try {
      const response = await fetch("http://localhost:8080/getAllComments");
      const commentsList = await response.json();
      setComments(commentsList);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <article className="emptyContent">
      <div className="content">
        <SectionHeader>Comments List</SectionHeader>
        {loading && <div>Loading...</div>}
        {!loading && (
          <div>
            {comments.map((comment) => {
              return (
                <div className="commentRow">
                  <Comment key={comment.id} rate={comment.rate}>
                    {comment.text}
                  </Comment>
                  <Button color="red">Delete comment</Button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </article>
  );
}
