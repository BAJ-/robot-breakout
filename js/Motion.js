/*
 * This class handles collisions.
 */

'use strict';
import Vector from 'Vector.js';

export default class {
  constructor(actorsInstance) {
    this._actorsInstance = actorsInstance;
    this._canvasObj = {};
  }

  moveComputerActors() {
    let actors = this._actorsInstance.get();
    this._actorsInstance.update(actors);
    this._handleCollision();
  }

  // Handles both ball, brick, paddle, and wall collisions.
  _handleCollision() {

  }
}
