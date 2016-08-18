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
    this._radius = r;
    this._positionVector = new Vector(x, y);
    this._startAngle = sA;
    this._endAngle = eA;

    this._velocityVector = new Vector(xV, yV);
  }

  setPosition(x, y) {
    this._positionVector.setCoordinates(x, y);
  }

  move() {
    this._positionVector.add(this._velocityVector);
  }

  flipDirection(d) {
    if (d === 'v') {
      this._velocityVector.flipVertically();
    } else if (d === 'h') {
      this._velocityVector.flipHorizontally();
    }
  }

  getVelocity() {
    return this._velocityVector.length();
  }

  getAnatomy() {
    return {
      radius: this._radius,
      color: this._color,
      drawType: 'arc',
      params: [
        this._positionVector.x(),
        this._positionVector.y(),
        this._radius,
        this._startAngle,
        this._endAngle
      ],
      positionVector: this._positionVector,
      velocityVector: this._velocityVector,
      flipDirection: (d)=> this.flipDirection(d),
      visible: true
    }
  }
}
