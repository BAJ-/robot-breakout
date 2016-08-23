/*
 * Game core for Robots Order BreakOut Trepidation!
 *
 * @canvas = reference to an HTML5 canvas element.
 */

'use strict';
import Actors from 'Actors.js';
import Collision from 'Collision.js';

export default class {
  constructor(canvas) {
    // Player settings.
    this._score = 0;
    this._lives = 3;

    // Game settings.
    this._running = false;

    this._canvas = canvas;
    this._ctx = this._canvas.getContext("2d");

    this._actors = new Actors(this._canvas.width, this._canvas.height);

    this._collision = new Collision();
  }

  _clearScene() {
    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    // TODO: Draw background.
  }

  _drawScene() {
    this._clearScene();
    // TODO: Draw scene.

    if (this._running) {
      requestAnimationFrame(()=> this._drawScene());
    }
  }

  _startGameLoop() {
    requestAnimationFrame(()=> this._drawScene());
  }

  // This is kinda out of place here, but haven't found a better
  // place for it yet.
  movePaddle(direction) {
    // TODO: Implement paddle movement.
  }

  start() {
    this._startGameLoop();
  }

  pause() {
    // TODO: Implement some kind of pause.
  }

  stop() {
    this._running = false;
  }
}
