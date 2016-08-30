/*
 * Object that contains Game initialization data.
 */

export default class {
  constructor(canvasWidth, canvasHeight) {
    this.gameInits = {};

    this._generateInitialSettings(canvasWidth, canvasHeight);
  }

  _generateInitialSettings(canvasWidth, canvasHeight) {
    this.gameInits.paddle = (()=> {
      let width = 60;
      let height = 6;
      return {
        x: (canvasWidth - width) / 2,
        y: canvasHeight - height,
        color: '#555555',
        width: width,
        height: height
      };
    })();
    this.gameInits.ball = (()=> {
      return {
        x: canvasWidth / 2,
        y: canvasHeight - 30,
        velocityX: -1,
        velocityY: -1,
        color: '#555555',
        radius: 10,
      };
    })();
    this.gameInits.brick = (()=> {
      return {
        x: 0,
        y: canvasHeight - 60,
        velocityX: 0,
        velocityY: 0,
        color: '#555555',
        width: 100,
        height: 6
      };
    })();
  }
};
