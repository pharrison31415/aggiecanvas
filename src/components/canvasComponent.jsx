import { Component } from "react";

export class CanvasComponent extends Component {
  state = {
    color: "red",
  };

  can;
  ctx;
  numofcells = 150;
  cellsize = 20;
  DPR;

  size = () => {
    return this.numofcells * this.cellsize;
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.DPR = window.devicePixelRatio;
    // this.cellsize = (window.innerWidth / this.numofcells);
    this.can = document.getElementById("main_canvas");
    this.ctx = this.can.getContext("2d");
    this.can.width = this.size() * this.DPR;
    this.can.height = this.size() * this.DPR;
    this.can.style.width = this.size() * +"px";
    this.can.style.height = this.size() + "px";
    this.ctx.fillStyle = "white";
    this.ctx.scale(this.DPR, this.DPR);
    this.ctx.fillRect(0, 0, this.size(), this.size());
    this.drawGrid();
  }

  render() {
    return (
      <div id="main_div" style={{ overflowX: "scroll" }}>
        <canvas
          id="main_canvas"
          onClick={(e) => {
            this.draw(
              e.pageX + document.getElementById("main_div").scrollLeft,
              e.pageY
            );
          }}
        >
          Canvas Area
        </canvas>
      </div>
    );
  }

  drawGrid() {
    let ctx = this.ctx;
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    for (let i = 0; i <= this.size(); i += this.cellsize) {
      ctx.moveTo(i, 0);
      ctx.lineTo(i, this.size());
    }
    for (let i = 0; i <= this.size(); i += this.cellsize) {
      ctx.moveTo(0, i);
      ctx.lineTo(this.size(), i);
    }
    ctx.stroke();
  }

  draw(x, y) {
    let coords = this.getCanvasCoords(x, y);
    x = coords[0];
    y = coords[1];
    this.ctx.fillStyle = this.state.color;
    this.ctx.fillRect(
      x * this.cellsize,
      y * this.cellsize,
      this.cellsize,
      this.cellsize
    );
  }

  getCanvasCoords(x, y) {
    let newX = parseInt(x / this.cellsize);
    let newY = parseInt(y / this.cellsize);
    return [newX, newY];
  }
}

export default CanvasComponent;
