/*
 * Currently stupidly specific ball class
 *
 * @ctx = canvas context.
 * @radius = ball radius
 * @startX = starting position x-coordinate
 * @startY = starting position y-coordinate
 */

'use strict';

export default class {
  constructor(ctx, radius, startX, startY) {
    this._ctx = ctx;
    this._radius = radius;
    this._x = startX;
    this._y = startY;
  }

  drawBall() {
    this._ctx.beginPath();
    this._ctx.arc(this._x, this._y, this._radius, 0, Math.PI*2);
    this._ctx.fillStyle = "#FFFFFF";
    this._ctx.fill();
    this._ctx.closePath();
  }
}
