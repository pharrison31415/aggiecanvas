import React, { useEffect, useState } from 'react';

export function CanvasComponent() {
  const [ctx, setCtx] = useState({});
  const [ctxReady, setCtxReady] = useState(false);
  const size = 2000;

  useEffect(() => {
    setCtx(document.getElementById("main_canvas").getContext('2d'));
    setCtxReady(true);
  });

  useEffect(() => {
      setCtx({ ...ctx, fillStyle: "white" });
      ctx.fillRect(0, 0, size, size);
      drawGrid();
  }, ctxReady);


  const drawGrid = () => {
    let cellsize = 40;
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    for (let i = 0; i <= size; i += cellsize) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, size);
    }
    for (let i = 0; i <= size; i += cellsize) {
        ctx.moveTo(0, i);
        ctx.lineTo(size, i);
    }
    ctx.stroke()
  }

  return ( 
      <div style={{overflowX: "scroll"}}>
          <canvas 
              id="main_canvas"
              height={ size } 
              width={ size }
              onClick={(e) => console.log(e.pageX, e.pageY)}>
                  Canvas Area
          </canvas>
      </div>
  );



  // getCanvasCoords(x, y) {

  // }
}
 
export default CanvasComponent;