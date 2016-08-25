import RobotCore from 'RobotCore.js';

let game = new RobotCore(document.getElementById('breakout-canvas'));
game.start();

document.addEventListener('keydown', (e)=> {
  game.handleKeyPress(e.keyCode);
});

document.addEventListener('keyup', (e)=> {
  game.handleKeyPress(e.keyCode);
});
