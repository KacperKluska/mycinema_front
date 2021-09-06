import "./style.scss";
import DataInput from "../DataInput/DataInput";
import SectionHeader from "../SectionHeader/SectionHeader";
import Button from "../Button/Button";
import { useState } from "react/cjs/react.development";

export default function Register() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const registerUser = async (event) => {
    event.preventDefault();
    setLoading(true);
    console.log("Próbuję zarejestrować usera");
    if (password !== password2) {
      setError("Passwords aren't identical");
      setLoading(false);
      return null;
    }
    try {
      const response = await fetch("http://localhost:8080/addUser", {
        method: "POST",
        body: JSON.stringify({
          login: login,
          email: email,
          password: password,
        }),
        headers: { "Content-Type": "application/json; charset=UTF-8" },
      });
      setError(await response.json());
    } catch (err) {
      console.log(err);
      setError("Server error");
    }
    setLoading(false);
    setLogin("");
    setEmail("");
    setPassword("");
    setPassword2("");
  };

  return (
    <section className="loginSection">
      {!loading && (
        <form onSubmit={registerUser}>
          <div className="inputs">
            <SectionHeader>Sign up</SectionHeader>
            <DataInput
              type="text"
              placeHolder="Name"
              maxLength={20}
              editable={true}
              onChange={setLogin}
              value={login}
            />
            <DataInput
              type="email"
              placeHolder="Email"
              maxLength={null}
              editable={true}
              maxLength={30}
              onChange={setEmail}
              value={email}
            />
            <DataInput
              type="password"
              placeHolder="Password"
              minLength={8}
              maxLength={30}
              editable={true}
              onChange={setPassword}
              value={password}
            />
            <DataInput
              type="password"
              placeHolder="Password"
              minLength={8}
              maxLength={30}
              editable={true}
              onChange={setPassword2}
              value={password2}
            />
          </div>
          <div className="loginDownSection">
            <div style={{ color: error === "" ? "green" : "red" }}>{error}</div>
            <Button type="submit" color="blue">
              Sign up
            </Button>
          </div>
        </form>
      )}
    </section>
  );
}
