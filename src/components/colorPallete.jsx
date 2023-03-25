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
          props.setPalleteOpen(false);
        }}
      >
        Cancel
      </button>
      <h2>PALLETE</h2>
      <button>OK</button>
    </div>
  );
}
