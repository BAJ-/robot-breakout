/*
 * This class handles collisions.
 */

'use strict';
import Vector from 'Vector.js';

export default class {
  constructor(actorsInstance) {
    this._actorsInstance = actorsInstance;
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

      // This means we either have a ball or a brick.
      if (Array.isArray(actor)) {
        actor.forEach((a, i)=> {
          a.move();
          a.velocity = collisionActor[i].velocity;
        });
        // This means the actor is the paddle.
      } else {
        actor.move(collisionActor.doMove);
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
      if (Array.isArray(actor)) {
        actor.forEach((a)=> this._doCollisionCheck(canvasWidth, canvasHeight, a, actorName));
      } else {
        this._doCollisionCheck(canvasWidth, canvasHeight, actor, actorName);
      }
    }
  }

  _doCollisionCheck(canvasWidth, canvasHeight, actor, actorName) {
    let futureX = actor.position.x + actor.velocity.x;
    let futureY = actor.position.y + actor.velocity.y;
    let leftX = actor.radius ? (futureX - actor.radius):futureX;
    let rightX = actor.radius ? (futureX + actor.radius):(futureX + actor.width);
    let topY = actor.radius ? (futureY - actor.radius):futureY;
    // left wall <=> right wall
    if (leftX < 0 || rightX > canvasWidth) {
      if (actor.computer) {
        actor.velocity.flipVertically();
      } else {
        actor.doMove = false;
      }
    }
    // top wall
    if (topY < 0) {
      actor.velocity.flipHorizontally();
    }
  }
}
