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
    this.gameInits.bricks = (()=> {
      let columns = 4;
      let rows = 4;
      let bricks = Array(columns).fill().map(() => Array(rows));
      let brickWidth = 50;
      let brickHeight = 8;
      let bottomPadding = 60;

      let paddingX = (canvasWidth - (rows * brickWidth)) / (rows + 1);
      let paddingY = (canvasHeight - bottomPadding - (columns * brickHeight)) / (columns + 1)
      for(let col = 0; col < columns; col++) {
        for(let row = 0; row < rows; row++) {
          bricks[col][row] = {
            x: (brickWidth * row) + paddingX * (1 + row),
            y: (brickHeight * col) + paddingY * (1 + col),
            velocityX: 0,
            velocityY: 0,
            color: '#555555',
            width: brickWidth,
            height: brickHeight
          }
        }
      }
      return bricks;
    })();
  }
};
