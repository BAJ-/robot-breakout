/*
 * This class represent a game paddle
 */

'use strict';
import Vector from 'Vector.js';

export default class {
  constructor(x, y, width, height, color = '#FFFFFF') {
    this.width = width;
    this.height = height;
    this.color = color;

    this.position = new Vector(x, y);
    this.speed = 2;

    this.computer = false;

    // Control keys.
    this.rightPressed = false;
    this.leftPressed = false;
  }

  // Setting the paddle to a specific position.
  setPosition(x, y) {
    this.position.setCoordinates(x, y);
  }

  move() {
    if (this.rightPressed) {
      this.position.x += this.speed;
    } else if (this.leftPressed) {
      this.position.x -= this.speed;
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
