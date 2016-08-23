/*
 * This class represents actors in the game
 */
'use strict';
import Ball from 'Ball.js';
import Paddle from 'Paddle.js';
import Brick from 'Brick.js';
import GameInit from 'GameInit.js';

export default class {
  constructor(canvasWidth, canvasHeight) {
    this._actors = {
      paddle: {},
      balls: [],
      bricks: []
    };

   this._gameInit = new GameInit(canvasWidth, canvasHeight);

    // Initialize actors.
    this._initActors();
  }

  // Returns current actors.
  get() {
    return this._actors;
  }

  // Update actors according to provided updates.
  update(updatedActors) {
    // TODO: write upate method.
  }

  _initActors() {
    // TODO: Initialize actors.
    let inits = this._gameInit.gameInits;
    let paddle = inits.paddle;
    this._actors.paddle = new Paddle(
          paddle.x,
          paddle.y,
          paddle.width,
          paddle.height,
          paddle.color
        );
    let ball = inits.ball;
    this._actors.balls.push(new Ball(
          ball.x,
          ball.y,
          ball.velocityX,
          ball.velocityY,
          ball.radius,
          ball.color
        ));
  }
}
