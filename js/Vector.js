/*
 * This class represents a 2 dimensional vector
 *
 */

export default class {
  constructor(x = 0, y = 0) {
    this._x = x;
    this._y = y;
  }

  x() {
    return this._x;
  }

  y() {
    return this._y;
  }

  setCoordinates(x, y) {
    this._x = x;
    this._y = y;
  }

  // Adds given vector to vector instance.
  add(vector) {
    this._x += vector.x;
    this._y += vector.y;
  }

  // Flips the vector instance over the y-axis
  flipVertically() {
    this._x = -this._x;
  }

  // Flips the vector instance over the x-axis
  flipHorizontally() {
    this._y = -this._y;
  }

  // Scale vector instance.
  scale(scale) {
    this._x *= scale;
    this._y *= scale;
  }

  // Returns the vector instance length.
  length() {
    return Math.sqrt(Math.pow(this._x, 2) + Math.pow(this._y, 2));
  }

  // Rotates the vector instance by the given radian.
  rotate(rad) {
    this._x = (Math.cos(rad) * this._x) - (Math.sin(rad) * this._y);
    this._y = (Math.sin(rad) * this._x) + (Math.cos(rad) * this._y);
  }
}
