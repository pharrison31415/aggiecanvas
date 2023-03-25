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
    const [color, setColor] = useState("");
    const onColorSelect = () => {
      setColor(e.value);
    }
    return (
    <div>
    {/* white */}
    <button value="#FFFFFF" onClick={onColorSelect}>
      <svg>
        <rect x="0" y="0" width="25px" height="25px" fill="#FFFFFF"></rect>
      </svg>
    </button>
    {/* black */}
    <button value="#000000" onClick={onColorSelect}>
      <svg>
        <rect x="0" y="0" width="25px" height="25px" fill="#000000"></rect>
      </svg>
    </button>
    {/* red */}
    <button value='#FF0000' onClick={onColorSelect}>
      <svg>
        <rect x="0" y="0" width="25px" height="25px" fill="#FF0000"></rect>
      </svg>
    </button>
    {/* blue */}
    <button value="#0000FF" onClick={onColorSelect}>
      <svg>
        <rect x="0" y="0" width="25px" height="25px" fill="#0000FF"></rect>
      </svg>
    </button>
    {/* green */}
    <button value="#008000" onClick={onColorSelect}>
      <svg>
        <rect x="0" y="0" width="25px" height="25px" fill="#008000"></rect>
      </svg>
    </button>
    {/* yellow */}
    <button value="#FFFF00" onClick={onColorSelect}>
      <svg>
        <rect x="0" y="0" width="25px" height="25px" fill="#FFFF00"></rect>
      </svg>
    </button>
    {/* purple */}
    <button value="#800080" onClick={onColorSelect}>
      <svg>
        <rect x="0" y="0" width="25px" height="25px" fill="#800080"></rect>
      </svg>
    </button>
    {/* orange */}
    <button value="FFA500" onClick={onColorSelect}>
      <svg>
        <rect x="0" y="0" width="25px" height="25px" fill="#FFA500"></rect>
      </svg>
    </button><br />
    {/* pink */}
    <button value="#FFC00B" onClick={onColorSelect}>
      <svg>
        <rect x="0" y="0" width="25px" height="25px" fill="#FFC00B"></rect>
      </svg>
    </button>
    {/* maroon */}
    <button value="#800000" onClick={onColorSelect}>
      <svg>
        <rect x="0" y="0" width="25px" height="25px" fill="#800000"></rect>
      </svg>
    </button>
    {/* cyan */}
    <button value="#00FFFF" onClick={onColorSelect}>
      <svg>
        <rect x="0" y="0" width="25px" height="25px" fill="#00FFFF"></rect>
      </svg>  
    </button>
    {/* brown */}
    <button value="#A52A2A" onClick={onColorSelect}>
      <svg>
        <rect x="0" y="0" width="25px" height="25px" fill="#A52A2A"></rect>
      </svg>
    </button>
    {/* tan */}
    <button value="#D2B48C" onClick={onColorSelect}>
      <svg>
        <rect x="0" y="0" width="25px" height="25px" fill="#D2B48C"></rect>
      </svg>
    </button>
    {/* violet */}
    <button value="#EE82EE" onClick={onColorSelect}>
      <svg>
        <rect x="0" y="0" width="25px" height="25px" fill="#EE82EE"></rect>
      </svg>
    </button>
    {/* teal */}
    <button value="#008080" onClick={onColorSelect}>
      <svg>
        <rect x="0" y="0" width="25px" height="25px" fill="#008080"></rect>
      </svg>
    </button>
    {/* magenta */}
    <button value="#FF00FF" onClick={onColorSelect}>
      <svg>
        <rect x="0" y="0" width="25px" height="25px" fill="#FF00FF"></rect>
      </svg>
    </button><br />
    {/* lightskyblue */}
    <button value="#87CEFA" onClick={onColorSelect}>
      <svg>
        <rect x="0" y="0" width="25px" height="25px" fill="#87CEFA"></rect>
      </svg>
    </button>
    {/* lightcoral */}
    <button value="#F08080" onClick={onColorSelect}>
      <svg>
        <rect x="0" y="0" width="25px" height="25px" fill="#F08080"></rect>
      </svg>
    </button>
    {/* gold */}
    <button value="#FFD700" onClick={onColorSelect}>
      <svg>
        <rect x="0" y="0" width="25px" height="25px" fill="#FFD700"></rect>
      </svg>
    </button>
    {/* deeppink */}
    <button value="#FF1493" onClick={onColorSelect}>
    <svg>
      <rect x="0" y="0" width="25px" height="25px" fill="#FF1493"></rect>
    </svg>
    </button>
    {/* darkred */}
    <button value="#8B0000" onClick={onColorSelect}>
      <svg>
        <rect x="0" y="0" width="25px" height="25px" fill="#8B0000"></rect>
      </svg>
    </button>
    {/* darkblue */}
    <button value="#00008B" onClick={onColorSelect}>
      <svg>
        <rect x="0" y="0" width="25px" height="25px" fill="#00008B"></rect>
      </svg>
    </button>
    {/* grey */}
    <button value="#080808" onClick={onColorSelect}>
      <svg>
        <rect x="0" y="0" width="25px" height="25px" fill="#808080"></rect>
      </svg>
    </button>
    {/* darkgrey */}
    <button value="#A9A9A9" onClick={onColorSelect}>
      <svg>
        <rect x="50" y="175" width="25px" height="25px" fill="#A9A9A9"></rect>
      </svg>
    </button>
  </div>
    )
  }
}
