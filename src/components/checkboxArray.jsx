import GridCell from "./gridCell";

export default function CheckboxArray(props) {
  return (
    <div style={{ overflow: "auto", whiteSpace: "nowrap" }}>
      {props.grid.map((row) => {
        return (
          <div>
            {row.map((cell) => {
              return <GridCell />;
            })}
          </div>
        );
      })}
    </div>
  );
}
