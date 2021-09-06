import "./style.scss";
import Button from "../Button/Button";

export default function UserAccountRow({ user }) {
  return (
    <section className="userAccountRow">
      <div className="userAccountRowDetails">
        <div style={{ fontWeight: "bold" }}>Name:</div>
        <div>{user.login}</div>
      </div>
      <div className="userAccountRowDetails">
        <div style={{ fontWeight: "bold" }}>Email:</div>
        <div>{user.email}</div>
      </div>
      <div className="userAccountRowButtons">
        <Button color="red">Delete user</Button>
      </div>
    </section>
  );
}
