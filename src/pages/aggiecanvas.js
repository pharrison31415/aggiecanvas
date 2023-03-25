import { useEffect, useState } from "react";
import axios from "axios";

export default function Canvas() {
  const [mainGrid, setMainGrid] = useState([]);

  useEffect(() => {
    axios.get("/api/grid-snapshot").then((gridResponse) => {
      let snapshot = gridResponse.data.snapshot;
      let editingGrid = snapshot.grid;

      axios
        .get("/api/latest-updates", {
          params: { "last-update": snapshot.lastUpdate },
        })
        .then((updatesResponse) => {
          let updates = updatesResponse.data.updates;
          for (let u of updates) {
            editingGrid[u.row][u.column] = u.color;
          }
          setMainGrid(editingGrid);
        });
    });
  }, []);

  return <div>HELLO</div>;
}
