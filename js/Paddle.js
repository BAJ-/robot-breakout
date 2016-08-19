/*
 * This class represent a game paddle
 */

'use strict';
import Vector from 'Vector.js';

export default class {
  constructor(x, y, width, height, color = '#FFFFFF') {
    this.positionVector = new Vector(x, y);
    this.width = width;
    this.height = height;

    this.isMachine = false;
    this.canAffect = true;
    this.visible = true;
  }

  getDrawInfo() {
    return {
      drawType: 'rect',
      color: this._color,
      params: [
        this.positionVector.x(),
        this.positionVector.y(),
        this.width,
        this.height
      ]
    };
  }
}
