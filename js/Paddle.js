/*
 * This class represent a game paddle
 */

'use strict';
import Vector from 'Vector.js';

export default class {
  constructor(x, y, width, height, color = '#FFFFFF', speed = 3) {
    this.width = width;
    this.height = height;
    this.color = color;

    this.position = new Vector(x, y);
    this.velocity = new Vector(speed, 0);

    this.computer = false;

    // Control keys.
    this.rightPressed = false;
    this.leftPressed = false;
  }

  // Setting the paddle to a specific position.
  setPosition(x, y) {
    this.position.setCoordinates(x, y);
  }

  move(doMove) {
    if (this.rightPressed || this.leftPressed) {
      if (this.rightPressed) {
        this.velocity.x = Math.abs(this.velocity.x);
      } else if (this.leftPressed) {
        this.velocity.x = -Math.abs(this.velocity.x);
      }
      if (doMove) {
        this.position.add(this.velocity);
      }
    }
  }

  // Returns relevant drawing information related to
  // the paddle.
  getDrawInfo() {
    return {
      drawType: 'rect',
      color: this.color,
      params: [
        this.position.x,
        this.position.y,
        this.width,
        this.height
      ]
    };
  }
}
