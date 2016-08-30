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
    let collisionActors = Object.assign([], actors);

    // The main reason for doing this instead of post-move collision
    // handling is paddle movement issues.
    this._handleCollision(canvasWidth, canvasHeight, collisionActors);

    actors.forEach((actor, idx)=> {
      let collisionActor = collisionActors[idx];

      // This means we either have a ball or a brick.
      if (actor.computer) {
        actor.move();
        actor.velocity = collisionActor.velocity;
      // This means the actor is the paddle.
      } else {
        actor.move(collisionActor.doMove);
      }
    });
    this._actorsInstance.update(actors);
  }

  // Handles both ball, brick, paddle, and wall collisions.
  // TODO: Implement real collision detection.
  _handleCollision(canvasWidth, canvasHeight, actors) {
    actors.forEach((actor)=> {
      actor.doMove = true;
      this._doCollisionCheck(canvasWidth, canvasHeight, actor);
    });
  }

  // TODO: Make more simple. This is the BB method.
  _doCollisionCheck(canvasWidth, canvasHeight, actor) {
    let futureX = actor.position.x + actor.velocity.x;
    let futureY = actor.position.y + actor.velocity.y;
    let leftX = actor.radius ? (futureX - actor.radius):futureX;
    let rightX = actor.radius ? (futureX + actor.radius):(futureX + actor.width);
    let topY = actor.radius ? (futureY - actor.radius):futureY;
    let bottomY = actor.radius ? (futureY + actor.radius):(futureY + actor.height);
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
    // If we have computer controlled actors we need to do additional collision
    // detection.
    if (actor.computer) {
      // Paddle is always first.
      let paddle = this._actorsInstance.get()[0];
      let paddleLeftX = paddle.position.x;
      let paddleRightX = paddle.position.x + paddle.width;
      let paddleTopY = paddle.position.y;
      let paddleBottomY = paddle.position.y - paddle.height;
      if (leftX > paddleLeftX && rightX < paddleRightX) {
        if (bottomY > paddleTopY) {
          actor.velocity.flipHorizontally();
        }
      }
    }
  }
}
