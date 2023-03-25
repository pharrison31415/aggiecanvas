import GridCell from "./gridCell";

export default function CheckboxArray(props) {
  return (
    <>
      {props.grid.map((row) => {
        return (
          <div>
            {row.map((cell) => {
              return <GridCell />;
            })}
          </div>
        );
      })}
    </>
  );
}
