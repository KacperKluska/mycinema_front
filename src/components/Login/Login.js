import "./style.scss";
import DataInput from "../DataInput/DataInput";
import SectionHeader from "../SectionHeader/SectionHeader";
import Button from "../Button/Button";

export default function Login() {
  return (
    <section className="loginSection">
      <form>
        <div className="inputs">
          <SectionHeader>Sign in</SectionHeader>
          <DataInput
            type="email"
            placeHolder="Email"
            data=" "
            editable={true}
          />
          <DataInput
            type="password"
            placeHolder="Password"
            data=" "
            editable={true}
          />
        </div>
        <div className="loginDownSection">
          <Button type="submit" color="blue">
            Sign in
          </Button>
        </div>
      </form>
    </section>
  );
}
