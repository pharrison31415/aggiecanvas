export default function GridCell(props) {
  return (
    <label
      className="container"
      style={{
        margin: "-2px 1px",
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
      <span className="checkmark"></span>
    </label>
  );
}
