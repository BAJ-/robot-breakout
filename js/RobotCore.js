/*
 * Game core for Robots Order BreakOut Trepidation!
 *
 * @canvas = reference to an HTML5 canvas element.
 */

'use strict';
import Actors from 'Actors.js';
import Motion from 'Motion.js';

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

    this._motion = new Motion(this._actors);
  }

  _clearScene() {
    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    // TODO: Draw background.
  }

  _drawScene() {
    this._clearScene();
    this._motion.moveActors(this._canvas.width, this._canvas.height);
    this._drawActors();
    // TODO: Draw scene.

    if (this._running) {
      requestAnimationFrame(()=> this._drawScene());
    }
  }

  // Draw all the current actors.
  _drawActors() {
    let allActors = this._actors.get();
    for (let actorName in allActors) {
      let actor = allActors[actorName];
      if (Array.isArray(actor)) {
        actor.forEach((a)=> this._drawShape(a));
      } else {
        this._drawShape(actor);
      }
    }
  }

  _drawShape(actor) {
    let drawInfo = actor.getDrawInfo();
    let ctx = this._ctx;
    ctx.beginPath();
    ctx[drawInfo.drawType].apply(ctx, drawInfo.params);
    ctx.fillStyle = drawInfo.color;
    ctx.fill();
    ctx.closePath();
  }

  _startGameLoop() {
    requestAnimationFrame(()=> this._drawScene());
  }

  // Given a keyCode from an event listener it takes
  // appropriate actions.
  // Maybe factor out user input at some point.
  handleKeyPress(keydown = false, keyCode) {
    let paddle = this._actors.get().paddle;
    if (keyCode === 37) {
      paddle.leftPressed = keydown;
    } else if (keyCode === 39) {
      paddle.rightPressed = keydown;
    }
    // TODO: Implement pause.
  }

  start() {
    this._running = true;
    this._startGameLoop();
  }

  pause() {
    // TODO: Implement some kind of pause.
  }

  stop() {
    this._running = false;
  }
}
