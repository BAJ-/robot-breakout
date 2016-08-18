/*
 * This class represents actors in the game
 */
'use strict';
import Ball from 'Ball.js';

const actorsDefinitions = {
  ball: {
    xVelocity: 0,
    yVelocity: 0,
    radius: 10
  }
};

export default class {
  constructor(canvasWidth, canvasHeight) {
    this._actorRefs = [];
    this._actors = [];

    // Initializing ball
    let bX = canvasWidth / 2;
    let bY = canvasHeight - 25;
    let ball = actorsDefinitions.ball
    this.addActor(new Ball(bX, bY, ball.xVelocity, ball.yVelocity, ball.radius));
  }

  getVisibleActors() {
    return this._actors.filter((a)=> a.visible) || [];
  }

  addActor(actor) {
    this._actorRefs.push(actor);
    this._actors.push(actor.getAnatomy());
  }
}
