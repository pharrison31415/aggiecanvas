export default function GridCell(props) {
  return (
    <label
      id={`${props.r},${props.c}`}
      className="container"
      style={{
        margin: "-2.5px .5px",
        width: "35px",
        height: "35px",
      }}
    >
      <input
        checked={props.focus === props.cellNum}
        onChange={() => {
          if (props.focus != props.cellNum) {
            props.setFocus(props.cellNum);
            props.setPalleteOpen(true);
          } else {
            props.setFocus(-1);
            props.setPalleteOpen(false);
          }
        }}
        type="checkbox"
      />
      <span
        style={{ backgroundColor: props.cellColor }}
        className={
          props.focus === props.cellNum ? "checkmark selected" : "checkmark"
        }
      ></span>
    </label>
  );
}
