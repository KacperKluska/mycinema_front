import "./style.scss";

export default function DataInput({
  placeHolder,
  editable,
  type,
  value,
  maxLength,
  minLength,
  onChange,
}) {
  return (
    <div className="data">
      <label className="loginLabel">{placeHolder}:</label>
      <input
        className="dataInput"
        type={type}
        placeholder={placeHolder}
        maxLength={maxLength}
        minLength={minLength}
        value={value}
        readOnly={!editable}
        required
        onChange={(e) => {
          onChange(e.target.value);
        }}
      ></input>
    </div>
  );
}
