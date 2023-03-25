export default function ColorCell(props) {
  return (
    <label
      className="container"
      style={{
        margin: "0px",

        width: "35px",
        height: "35px",
      }}
    >
      <input
        checked={props.focus === props.cellNum}
        onChange={() => {
          if (props.focus != props.cellNum) {
            props.setFocus(props.cellNum);
            props.setSelectedColor(props.cellColor);
          }
        }}
        type="checkbox"
      />
      <span
        style={{
          backgroundColor: props.cellColor,
          border: props.cellColor === "#FFFFFF" ? "1px solid black" : "none",
        }}
        className={
          props.focus === props.cellNum ? "paint chosen-color" : "paint"
        }
      ></span>
    </label>
  );
}
