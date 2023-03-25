import axios from "axios";

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
}
