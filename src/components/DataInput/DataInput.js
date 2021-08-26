import "./style.scss";

export default function Datainput({ placeHolder, editable, data, type }) {
  return (
    <div className="data">
      <label>{placeHolder}:</label>
      <input
        className="dataInput"
        type={type}
        placeHolder={placeHolder}
        value={!editable ? data : null}
        readOnly={!editable}
        required
      ></input>
    </div>
  );
}
