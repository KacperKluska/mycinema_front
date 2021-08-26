import DataInput from "../../DataInput/DataInput";
import SectionHeader from "../../SectionHeader/SectionHeader";
import "./style.scss";

export default function Account() {
  return (
    <div className="emptyContent">
      <article className="content">
        <SectionHeader>Account settings</SectionHeader>
        <DataInput
          type="email"
          placeHolder="Email"
          data="test@gmail.com"
          editable={true}
        />
        <DataInput
          type="test"
          placeHolder="Name"
          data="Kacper"
          editable={true}
        />
        <DataInput
          type="text"
          placeHolder="Role"
          data="Normal user"
          editable={false}
        />
      </article>
    </div>
  );
}
