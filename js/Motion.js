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

  moveActors(canvasWidth, canvasHeight) {
    let actors = this._actorsInstance.get();
    for (let actorName in actors) {
      let actor = actors[actorName];
      if (Array.isArray(actor)) {
        actor.forEach((a)=> a.move());
      } else {
        actor.move();
      }
    }
    this._actorsInstance.update(actors);
    this._handleCollision(canvasWidth, canvasHeight, actors);
  }

  // Handles both ball, brick, paddle, and wall collisions.
  // TODO: Implement real collision detection.
  _handleCollision(canvasWidth, canvasHeight, actors) {
    // Extremely simple collision detection only
    // for balls.
    for (let actorName in actors) {
      if (actorName === 'balls') {
        actors[actorName].forEach((ball)=> {
          let futureX = ball.position.x + ball.velocity.x;
          let futureY = ball.position.y + ball.velocity.y;
          if (futureX > canvasWidth - ball.radius || futureX < ball.radius) {
            ball.velocity.flipVertically();
          }
          if (futureY < ball.radius) {
            ball.velocity.flipHorizontally();
          }
        });
      }
    }
  }
}
