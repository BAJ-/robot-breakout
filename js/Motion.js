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
    // We clone the actors to do a pre-move collision handling.
    let collisionActors = Object.assign({}, actors);

    // The main reason for doing this instead of post-move collision
    // handling is paddle movement issues.
    this._handleCollision(canvasWidth, canvasHeight, collisionActors);

    for (let actorName in actors) {
      let actor = actors[actorName];
      let collisionActor = collisionActors[actorName];

      if (Array.isArray(actor)) {
        actor.forEach((a, i)=> {
          a.move();
          a.velocity = collisionActor[i].velocity;
        });
      } else {
        actor.move(collisionActor.doMove);
        actor.velocity = collisionActor.velocity;
      }
    }
    this._actorsInstance.update(actors);
  }

  // Handles both ball, brick, paddle, and wall collisions.
  // TODO: Implement real collision detection.
  _handleCollision(canvasWidth, canvasHeight, actors) {
    for (let actorName in actors) {
      let actor = actors[actorName];
      actor.doMove = true;
      // Crazy paddle wall detection.
      if (actorName === 'paddle') {
        let futureX = actor.position.x + actor.velocity.x;
        if (futureX < 0 || futureX > canvasWidth - actor.width) {
          actor.doMove = false;
        } else {
          actor.doMove = true;
        }
      // Extremely simple collision detection only
      // for balls.
      } else if (actorName === 'balls') {
        actor.forEach((ball)=> {
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
