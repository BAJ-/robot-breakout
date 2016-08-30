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
    this._doCollisionCheck(canvasWidth, canvasHeight, 0, 1, actors);
  }

  // TODO: Make more simple. This is the BB method.
  _doCollisionCheck(canvasWidth, canvasHeight, i, j, actors) {
    let curActor = actors[i];
    let obsActor = actors[j];

    curActor.doMove = true;

    let futureX = curActor.position.x + curActor.velocity.x;
    let futureY = curActor.position.y + curActor.velocity.y;
    let leftX = curActor.radius ? (futureX - curActor.radius):futureX;
    let rightX = curActor.radius ? (futureX + curActor.radius):(futureX + curActor.width);
    let topY = curActor.radius ? (futureY - curActor.radius):futureY;
    let bottomY = curActor.radius ? (futureY + curActor.radius):(futureY + curActor.height);
    // left wall <=> right wall
    if (leftX < 0 || rightX > canvasWidth) {
      if (curActor.computer) {
        curActor.velocity.flipVertically();
      } else {
        curActor.doMove = false;
      }
    }
    // top wall
    if (topY < 0) {
      curActor.velocity.flipHorizontally();
    }
    // If we have computer controlled actors we need to do additional collision
    // detection.
    if (curActor.computer) {
      let obsLeftX = obsActor.position.x;
      let obsRightX = obsActor.position.x + obsActor.width;
      let obsTopY = obsActor.position.y;
      let obsBottomY = obsActor.position.y + obsActor.height;
      if (leftX > obsLeftX && rightX < obsRightX) {
        if ((bottomY > obsTopY && bottomY < obsBottomY) || (topY < obsBottomY && topY > obsTopY)) {
          curActor.velocity.flipHorizontally();
        }
      }
    }
    if (actors[j + 1] !== undefined) {
      this._doCollisionCheck(canvasWidth, canvasHeight, i, j + 1, actors);
    } else if (actors[i + 1] !== undefined) {
      this._doCollisionCheck(canvasWidth, canvasHeight, i + 1, 0, actors);
    }
  }
}
