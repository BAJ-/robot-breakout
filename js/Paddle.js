/*
 * This class represent a game paddle
 */

'use strict';
import Vector from 'Vector.js';

export default class {
  constructor(x, y, width, height, color = '#FFFFFF') {
    this._positionVector = new Vector(x, y);
    this._width = width;
    this._height = height;

    this.isMachine = false;
  }

  getAnatomy() {
    return {
      color: this._color,
      drawType: 'rect',
      params: [
        this._positionVector.x(),
        this._positionVector.y(),
        this._width,
        this._height
      ],
      visible: true,
      isMachine: this.isMachine
    }
  }
}
