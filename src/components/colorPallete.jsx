import axios from "axios";
import { useState } from "react";

export default function ColorPallete(props) {
  return (
    <div
      hidden={!props.palleteOpen}
      style={{
        position: "fixed",
        height: "200px",
        bottom: "0",
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "white",
      }}
    >
      <button
        onClick={() => {
          props.setFocus(-1);
          props.setPalleteOpen(false);
        }}
      >
        Cancel
      </button>
      <h2>PALLETE</h2>
      <MakePalette />
      <button
        onClick={() => {
          props.setFocus(-1);
          const l = props.grid[0].length;
          axios
            .post("/api/update", {
              row: Math.floor(props.focus / l),
              column: props.focus % l,
              color: "#00ffff",
            })
            .then((res) => {});
          props.setPalleteOpen(false);
        }}
      >
        OK
      </button>
    </div>
  );

  function MakePalette(){
    const colors = ["#FFFFFF", "#000000", "#FF0000", "#0000FF", "#008000", "#FFFF00", "#800080", "#FFA500", "#FFC00B", "#800000", "#00FFFF", "#A52A2A", "#D2B48C", "#EE82EE", "#008080", "#FF00FF", "#87CEFA", "#F08080", "#FFD700", "#FF1493", "#8B0000", "#00008B", "#080808", "#A9A9A9"];
    var colorButtonList = [];
    const [color, setColor] = useState("");
    const onColorSelect = (event) => {
      setColor(event.target.value);
    }
  
    return (
      <div>
        {colors.map(color => (
          <button value={color} onClick={onColorSelect}>
            <svg>
              <rect width="50" height="50" rx="15"yChannelSelector="" fill={color}/>  
            </svg>
          </button>
        ))}
      </div>
  )
  }
}
