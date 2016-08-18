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

    // Initializing ball
    let bX = canvasWidth / 2;
    let bY = canvasHeight - 25;
    let ball = actorsDefinitions.ball
    this.addActor(new Ball(bX, bY, ball.xVelocity, ball.yVelocity, ball.radius));
  }

  getActors() {
    return this._actorRefs.map((e)=> { return e.getAnatomy(); });
  }

  moveActors() {
    this._actorRefs.forEach((e)=> e.move());
  }

  addActor(actor) {
    this._actorRefs.push(actor);
  }
}
