import axios from "axios";
import { useState } from "react";
import ColorCell from "./colorCell";

export default function ColorPallete(props) {
  const colors = [
    "#FFFFFF",
    "#000000",
    "#FF0000",
    "#0000FF",
    "#008000",
    "#FFFF00",
    "#800080",
    "#FFA500",
    "#FFC00B",
    "#800000",
    "#00FFFF",
    "#A52A2A",
    "#D2B48C",
    "#EE82EE",
    "#008080",
    "#FF00FF",
    "#87CEFA",
    "#F08080",
    "#FFD700",
    "#FF1493",
    "#8B0000",
    "#00008B",
    "#080808",
    "#A9A9A9",
  ];

  const [focus, setFocus] = useState(-1);
  const [selectedColor, setSelectedColor] = useState(-1);

  const buildColorCells = () => {
    let array = [];
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 8; c++) {
        const n = parseInt(r * 8) + parseInt(c);
        array.push(
          <div key={n}>
            <ColorCell
              focus={focus}
              setFocus={setFocus}
              setSelectedColor={setSelectedColor}
              cellNum={n}
              cellColor={colors[n]}
            />
          </div>
        );
      }
    }
    return array;
  };

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
      <div
        style={{
          width: "50%",
          display: "grid",
          gridTemplateColumns: "repeat(8, 1fr)",
          backgroundColor: "white",
          margin: "20px",
        }}
      >
        {buildColorCells()}
      </div>
      <button
        disabled={selectedColor === -1}
        onClick={() => {
          props.setFocus(-1);
          const l = props.grid[0].length;
          axios
            .post("/api/update", {
              row: Math.floor(props.focus / l),
              column: props.focus % l,
              color: selectedColor,
            })
            .then((res) => {});
          props.setPalleteOpen(false);
        }}
      >
        OK
      </button>
    </div>
  );
}
