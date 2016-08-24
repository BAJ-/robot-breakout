/*
 * This class handles collisions.
 */

'use strict';
import Vector from 'Vector.js';

export default class {
  constructor() {
    this._actors = {};
    this._canvasObj = {};
  }

  // Returns actors that needs updating.
  // TODO: Write method.
  getCollisionUpdates(canvasWidth, canvasHeight, actorObj) {
    return {}
  }

  // Handles both ball, brick, paddle, and wall collisions.
  handleCollision() {

  }
}
