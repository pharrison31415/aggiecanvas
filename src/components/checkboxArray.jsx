export default function CheckboxArray(props) {
  return (
    <>
      {props.grid.map((row) => {
        return (
          <div>
            {row.map((cell) => {
              return <input className="grid-cell" type="checkbox" />;
            })}
          </div>
        );
      })}
    </>
  );
}
