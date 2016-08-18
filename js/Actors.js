/*
 * This class represents actors in the game
 */
'use strict';
import Ball from 'Ball.js';
import Paddle from 'Paddle.js';

const actorsDefinitions = {
  ball: {
    xVelocity: 1,
    yVelocity: -1,
    radius: 10
  },
  paddle: {
    width: 60,
    height: 6
  }
};

export default class {
  constructor(canvasWidth, canvasHeight) {
    this._actorRefs = [];

    // Initializing ball
    let bX = canvasWidth / 2;
    let bY = canvasHeight - 25;
    let ball = actorsDefinitions.ball;
    this.addActor(new Ball(bX, bY, ball.xVelocity, ball.yVelocity, ball.radius));

    let paddle = actorsDefinitions.paddle;
    let pX = (canvasWidth - paddle.width) / 2;
    let pY = canvasHeight - paddle.height;
    this.addActor(new Paddle(pX, pY, paddle.width, paddle.height));
  }

  getActors() {
    return this._actorRefs.map((e)=> { return e.getAnatomy(); });
  }

  moveActors() {
    this._actorRefs.forEach((e)=> { if (e.isMachine) e.move()});
  }

  addActor(actor) {
    this._actorRefs.push(actor);
  }
}
