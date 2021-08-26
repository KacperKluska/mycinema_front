import "./style.scss";

export default function Datainput({ placeHolder, editable, data, type }) {
  return (
    <input
      className="dataInput"
      type={type}
      placeHolder={placeHolder}
      value={data}
      readonly={editable}
      id="dataInput"
    ></input>
  );
}
