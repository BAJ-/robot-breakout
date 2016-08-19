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
    this._actors.getActors().forEach((actor)=> this.drawElement(actor));
    requestAnimationFrame(()=> this.drawScene());
  }

  drawElement(actor) {
    if (actor.visible) {
      let drawInfo = actor.getDrawInfo();
      this._ctx.beginPath();
      this._ctx[drawInfo.drawType].apply(this._ctx, drawInfo.params);
      this._ctx.fillStyle = drawInfo.color;
      this._ctx.fill();
      this._ctx.closePath();

      this.handleCollisions(actor);
    }
  }

  handleCollisions(actor) {
    if (actor.isMachine) {
      // This is not pretty. Will fix it later.
      let futureX = actor.positionVector.x() + actor.velocityVector.x();
      let futureY = actor.positionVector.y() + actor.velocityVector.y();
      if (futureX > this._canvas.width - actor.radius || futureX < actor.radius) {
        actor.flipDirection('v');
      }
      if (futureY < actor.radius) {
        actor.flipDirection('h');
      }
      this._actors.getAffecters().forEach((aff)=> {
        let affX = aff.positionVector.x();
        let actorX = actor.positionVector.x();
        if (futureY > this._canvas.height - actor.radius) {
          if (actorX > affX && actorX < affX + aff.width) {
            actor.flipDirection('h');
          }
        }
      });
    }
  }

  startGameLoop() {
    requestAnimationFrame(()=> this.drawScene());
  }

  start() {
    this.startGameLoop();
  }
}
