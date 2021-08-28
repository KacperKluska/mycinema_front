import "./style.scss";
import DataInput from "../DataInput/DataInput";
import SectionHeader from "../SectionHeader/SectionHeader";
import Button from "../Button/Button";

export default function Register() {
  return (
    <section className="loginSection">
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
        <div className="loginDownSection">
          <Button type="submit" color="blue">
            Sign up
          </Button>
        </div>
      </form>
    </section>
  );
}
