/*
 * This class represents a 2 dimensional vector
 *
 */

export default class {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  setCoordinates(x, y) {
    this.x = x;
    this.y = y;
  }

  // Adds given vector to vector instance.
  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
  }

  // Multiplies vector instance by given value.
  multiply(value) {
    this.x *= value;
    this.y *= value;
  }

  // Returns the dot product of two vectors.
  dotProduct(vector) {
    return (this.x * vector.x) + (this.y * vector.y);
  }

  // Flips the vector instance over the y-axis
  flipVertically() {
    this.x = -this.x;
  }

  // Flips the vector instance over the x-axis
  flipHorizontally() {
    this.y = -this.y;
  }

  // Returns the vector instance length.
  length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }

  // Rotates the vector instance by the given radian.
  rotate(rad) {
    this.x = (Math.cos(rad) * this.x) - (Math.sin(rad) * this.y);
    this.y = (Math.sin(rad) * this.x) + (Math.cos(rad) * this.y);
  }
}
