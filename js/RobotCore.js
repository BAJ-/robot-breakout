'use strict';

export default class {
  constructor(canvas) {
    this._canvas = canvas;
    this._ctx = this._canvas.getContext("2d");
  }

  clearScene() {
    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    this._ctx.fillStyle = "#9ea7b8";
    this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
  }

  drawScene() {
    this.clearScene();
  }

  startGameLoop() {
    setInterval(()=> this.drawScene(), 10);
  }

  start() {
    this.startGameLoop();
  }
}
