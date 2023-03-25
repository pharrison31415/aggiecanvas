import GridCell from "./gridCell";

export default function CheckboxArray(props) {
  const generateCells = () => {
    let array = [];
    for (let r in props.grid) {
      let row = [];
      for (let c in props.grid[r]) {
        row.push(
          <GridCell
            focus={props.focus}
            setFocus={props.setFocus}
            key={parseInt(r * props.grid[0].length) + parseInt(c)}
            cellNum={parseInt(r * props.grid[0].length) + parseInt(c)}
            r={r}
            c={c}
            cellColor={props.grid[r][c]}
            setPalleteOpen={props.setPalleteOpen}
          />
        );
      }
      array.push(<div key={r}>{row}</div>);
    }
    return array;
  };

  return (
    <div
      style={{
        overflow: "auto",
        whiteSpace: "nowrap",
        backgroundColor: "black",
        marginBottom: props.palleteOpen ? "190px" : "0px",
      }}
    >
      {generateCells()}
    </div>
  );
}
