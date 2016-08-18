/*
 * Game core for Robots Order BreakOut Trepidation!
 *
 * @canvas = reference to an HTML5 canvas element.
 */

'use strict';
import Actors from 'Actors.js';

export default class {
  constructor(canvas) {
    this._canvas = canvas;
    this._ctx = this._canvas.getContext("2d");

    this._actors = new Actors(this._canvas.width, this._canvas.height);
  }

  clearScene() {
    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    this._ctx.fillStyle = "#9ea7b8";
    this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
  }

  drawScene() {
    this.clearScene();
    this._actors.moveActors();
    this._actors.getActors().forEach((e)=> this.drawElement(e));
    requestAnimationFrame(()=> this.drawScene());
  }

  drawElement(e) {
    if (e.visible) {
      this._ctx.beginPath();
      this._ctx[e.drawType].apply(this._ctx, e.params);
      this._ctx.fillStyle = e.color;
      this._ctx.fill();
      this._ctx.closePath();
    }
  }

  startGameLoop() {
    requestAnimationFrame(()=> this.drawScene());
  }

  start() {
    this.startGameLoop();
  }
}
