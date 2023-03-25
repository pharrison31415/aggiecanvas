import { useEffect } from "react";
import axios from "axios";

export default function Canvas() {
  useEffect(() => {
    axios.get("/api/grid-snapshot").then((gridResponse) => {
      let snapshot = gridResponse.data.snapshot;
      let editingGrid = snapshot.grid;

      axios
        .get("/api/latest-updates", {
          params: { "last-update": snapshot.lastUpdate },
        })
        .then((updatesResponse) => {
          for (let u of updatesResponse.data.updates) {
            editingGrid[u.row][u.column] = u.color;
          }
          window.grid = editingGrid;
        });
    });
  }, []);

  useEffect(() => {
    window.lastUpdate = "2030-01-01 00:00:00";
    setInterval(() => {
      axios
        .get("/api/latest-updates", {
          params: { "last-update": window.lastUpdate },
        })
        .then((updatesResponse) => {
          window.lastUpdate = updatesResponse.data.lastUpdate;
          for (let u of updatesResponse.data.updates) {
            console.log(u);
            window.grid[u.row][u.column] = u.color;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }, 2000);
  }, []);

  return <div>HELLO</div>;
}
