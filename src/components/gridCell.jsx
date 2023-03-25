import { useState } from "react";

export default function GridCell() {
  const [checked, setChecked] = useState(false);

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
        checked={checked}
        onChange={() => {
          setChecked(!checked);
        }}
        type="checkbox"
      />
      <span className="checkmark"></span>
    </label>
  );
}
