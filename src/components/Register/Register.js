import "./style.scss";
import DataInput from "../DataInput/DataInput";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function Register() {
  return (
    <section className="" id="register">
      <form>
        <div className="inputs">
          <SectionHeader>Sign up</SectionHeader>
          <DataInput type="text" placeHolder="Name" data=" " editable={true} />
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
          <DataInput
            type="password"
            placeHolder="Password"
            data=" "
            editable={true}
          />
        </div>
        <div className="loginDownSection"></div>
      </form>
    </section>
  );
}
