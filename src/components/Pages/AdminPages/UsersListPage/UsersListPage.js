import "./style.scss";
import { useEffect, useState } from "react/cjs/react.development";
import SectionHeader from "../../../SectionHeader/SectionHeader";
import UserAccountRow from "../../../UserAccountRow/UserAccountRow";

export default function UsersListPage() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, [loading]);

  const deleteUser = () => {
    setLoading(true);
  };

  const getData = async () => {
    console.log("Downloading users...");
    try {
      const response = await fetch("http://localhost:8080/getUsers");
      const usersList = await response.json();
      setUsers(usersList);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <article className="emptyContent">
      <div className="content column">
        <SectionHeader>Users List</SectionHeader>
        {loading && <div>Loading...</div>}
        {!loading && (
          <div className="usersList">
            {users.map((user) => {
              return <UserAccountRow user={user} onUserDelete={deleteUser} />;
            })}
          </div>
        )}
      </div>
    </article>
  );
}
