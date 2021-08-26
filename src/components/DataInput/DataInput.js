import "./style.scss";

export default function DataInput({ placeHolder, editable, data, type }) {
  return (
    <div className="data">
      <label className="loginLabel">{placeHolder}:</label>
      <input
        className="dataInput"
        type={type}
        placeholder={placeHolder}
        // value={!editable ? data : ""}
        readOnly={!editable}
        required
      ></input>
    </div>
  );
}
