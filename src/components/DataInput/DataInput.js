import "./style.scss";

export default function DataInput({ placeHolder, editable, data, type }) {
  return (
    <div className="data">
      <label className="loginLabel">{placeHolder}:</label>
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
