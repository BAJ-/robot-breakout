'use strict';
import Ball from 'Ball.js';

export default class {
  constructor(canvas) {
    this._canvas = canvas;
    this._ctx = this._canvas.getContext("2d");

    // Initializing ball
    let startX = this._canvas.width / 2;
    let startY = this._canvas.height - 25;
    this._ball = new Ball(this._ctx, 10, startX, startY);
  }

  clearScene() {
    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    this._ctx.fillStyle = "#9ea7b8";
    this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
  }

  drawScene() {
    this.clearScene();
    this._ball.drawBall();
  }

  startGameLoop() {
    setInterval(()=> this.drawScene(), 10);
  }

  start() {
    this.startGameLoop();
  }
}
