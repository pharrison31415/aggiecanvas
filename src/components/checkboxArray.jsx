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
            key={r * props.grid.length + c}
            cellNum={r * props.grid.length + c}
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
      }}
    >
      {generateCells()}
    </div>
  );
}
