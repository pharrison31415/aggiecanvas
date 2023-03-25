import axios from "axios";
import { useState } from "react";
import ColorCell from "./colorCell";

export default function ColorPallete(props) {
  const colors = [
    "#000000",
    "#000088",
    "#0000ff",
    "#008800",
    "#008888",
    "#0088ff",
    "#00ff00",
    "#00ff88",
    "#00ffff",
    "#880000",
    "#880088",
    "#8800ff",
    "#888800",
    "#888888",
    "#8888ff",
    "#88ff00",
    "#88ff88",
    "#88ffff",
    "#ff0000",
    "#ff0088",
    "#ff00ff",
    "#ff8800",
    "#ff8888",
    "#ff88ff",
    "#ffff00",
    "#ffff88",
    "#ffffff",
  ];

  const [focus, setFocus] = useState(-1);
  const [selectedColor, setSelectedColor] = useState(-1);

  const buildColorCells = () => {
    let array = [];
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 9; c++) {
        const n = parseInt(r * 9) + parseInt(c);
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
        display: "flex",
        justifyContent: "start",
        backgroundColor: "white",
      }}
    >
        <div className="corner">
        <button className="btn btn-danger btn-lg"
          onClick={() => {
            props.setFocus(-1);
            props.setPalleteOpen(false);
          }}
        >
          X
        </button>

        <button
          className="btn btn-primary btn-lg"
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

      <div 
        style={{
          // width: "50%",
          display: "grid",
          gridTemplateColumns: "repeat(9, 1fr)",
          backgroundColor: "white",
          margin: "20px",
        }}
      >
        {buildColorCells()}
      </div>

    </div>
  );
}
