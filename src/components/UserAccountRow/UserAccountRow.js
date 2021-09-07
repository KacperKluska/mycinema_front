import "./style.scss";
import Button from "../Button/Button";

export default function UserAccountRow({ user, onUserDelete }) {
  const handleUserDelete = async () => {
    if (!window.confirm("Are you sure you want to delete user ?")) {
      return null;
    }
    try {
      const response = await fetch("http://localhost:8080/users", {
        method: "DELETE",
        body: JSON.stringify({
          id: user.id,
        }),
        headers: { "Content-Type": "application/json; charset=UTF-8" },
      });
      console.log(await response.json());
    } catch (error) {
      console.log(error);
    }
    onUserDelete();
  };

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
        <Button color="red" onClick={handleUserDelete}>
          Delete user
        </Button>
      </div>
    </section>
  );
}
