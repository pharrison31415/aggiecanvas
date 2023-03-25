import { useState } from "react";

export default function GridCell(props) {
  const [focused, setFocused] = useState(false);

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
        checked={focused}
        onChange={() => {
          setFocused(!focused);
          props.setPalleteOpen(!focused);
        }}
        type="checkbox"
      />
      <span className="checkmark"></span>
    </label>
  );
}
