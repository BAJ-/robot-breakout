/*
 * Currently stupidly specific ball class
 *
 * @ctx = canvas context.
 * @radius = ball radius
 * @startX = starting position x-coordinate
 * @startY = starting position y-coordinate
 */

'use strict';
import Vector from 'Vector.js';

export default class {
  constructor(x, y, xV, yV, r, color = '#FFFFFF') {
    this.color = color;
    this.radius = r;

    // We are drawing a circle here so we start
    // from 0 and end at 2*PI.
    this._startAngle = 0;
    this._endAngle = Math.PI * 2;

    // The ball instance current position vector.
    this.position = new Vector(x, y);

    // The ball instance current velocity vector.
    this.velocity = new Vector(xV, yV);

    // Balls are computer controlled.
    this.computer = true;
  }

  // Move ball instance to specific position.
  setPosition(x, y) {
    this.position.setCoordinates(x, y);
  }

  // Moves ball according to the velocity vector.
  move() {
    this.position.add(this.velocity);
  }

  // Returns relevant drawing info related to the
  // ball instance.
  getDrawInfo() {
    return {
      drawType: 'arc',
      color: this.color,
      params: [
        this.position.x,
        this.position.y,
        this.radius,
        this._startAngle,
        this._endAngle
      ]
    };
  }
}
