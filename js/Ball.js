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
  constructor(x, y, xV, yV, r, color = '#FFFFFF', sA = 0, eA = (Math.PI * 2)) {
    this._color = color;
    this.radius = r;
    this.positionVector = new Vector(x, y);
    this._startAngle = sA;
    this._endAngle = eA;

    this.velocityVector = new Vector(xV, yV);
    this.isMachine = true;
    this.visible = true;
  }

  setPosition(x, y) {
    this.positionVector.setCoordinates(x, y);
  }

  move() {
    this.positionVector.add(this.velocityVector);
  }

  flipDirection(d) {
    if (d === 'v') {
      this.velocityVector.flipVertically();
    } else if (d === 'h') {
      this.velocityVector.flipHorizontally();
    }
  }

  getVelocity() {
    return this.velocityVector.length();
  }

  getDrawInfo() {
    return {
      drawType: 'arc',
      color: this._color,
      params: [
        this.positionVector.x(),
        this.positionVector.y(),
        this.radius,
        this._startAngle,
        this._endAngle
      ]
    };
  }
}
