/*
 * This class represents actors in the game
 */
'use strict';
import Ball from 'Ball.js';
import Paddle from 'Paddle.js';
import Brick from 'Brick.js';

export default class {
  constructor(canvasWidth, canvasHeight) {
    this._actors = {
      paddle: {},
      balls: [],
      bricks: []
    };

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
  }
}
