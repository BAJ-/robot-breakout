import RobotCore from 'RobotCore.js';

let game = new RobotCore(document.getElementById('breakout-canvas'));
game.start();

document.addEventListener('keydown', (e)=> {
  game.handleKeyPress(true , e.keyCode);
});

document.addEventListener('keyup', (e)=> {
  game.handleKeyPress(false, e.keyCode);
});
