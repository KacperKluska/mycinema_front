import "./style.scss";

export default function Comment({ rate, children }) {
  return (
    /**
     * TODO
     * download user name from server by userId
     */
    <section className="commentBox">
      <div className="commentLeftSide">
        <img
          className="defaultUserImg"
          alt="userImg"
          src="https://boostchiropractic.co.nz/wp-content/uploads/2016/09/default-user-img.jpg"
        />
        Rate: {rate}/10
      </div>
      <div className="commentRightSide">{children}</div>
    </section>
  );
}
