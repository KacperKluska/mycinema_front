import Datainput from "../../DataInput/DataInput";
import SectionHeader from "../../SectionHeader/SectionHeader";
import "./style.scss";

export default function Account() {
  return (
    <div className="emptyContent">
      <article className="content">
        <SectionHeader>Account settings</SectionHeader>
        <Datainput
          type="email"
          placeHolder="Email"
          data="test@gmail.com"
          editable={true}
        />
        <Datainput
          type="test"
          placeHolder="Name"
          data="Kacper"
          editable={true}
        />
        <Datainput
          type="text"
          placeHolder="Role"
          data="Normal user"
          editable={false}
        />
      </article>
    </div>
  );
}
