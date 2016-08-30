/*
 * This class represent a game brick.
 */

'use strict';
import Vector from 'Vector.js';

export default class {
  constructor(x, y, xV, yV, width, height, color = '#FFFFFF') {
    this.width = width;
    this.height = height;
    this.color = color;

    this.position = new Vector(x, y);
    this.velocity = new Vector(xV, yV);

    this.computer = true;
  }

  // Move brick according to the velocity vector.
  move() {
    if (this.velocity.length() > 0) {
      this.position.add(this.velocity);
    }
  }

  // Returns drawing information for a brick instance.
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
