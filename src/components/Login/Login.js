import "./style.scss";
import DataInput from "../DataInput/DataInput";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function Login() {
  return (
    <section className="" id="register">
      <form>
        <div className="inputs">
          <SectionHeader>Sign in</SectionHeader>
          <DataInput
            type="email"
            placeHolder="Email"
            data={null}
            editable={true}
          />
          <DataInput
            type="password"
            placeHolder="Password"
            data={null}
            editable={true}
          />
        </div>
        <div className="loginDownSection"></div>
      </form>
    </section>
  );
}
