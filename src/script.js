import Game from "./game.js"

window.onload = () =>
{

  let myGameSnakY = new Game ();
  myGameSnakY.init();

  // let myGameSnakYTwo = new Game();
  // myGameSnakYTwo.init();

  document.onkeydown = (e) =>
  {
    const key = e.keyCode;
    let newDirection;
    switch(key)
    {
      case 37:
        newDirection = "left";
        break;
      case 38:
        newDirection = "up";
        break;
      case 39:
        newDirection = "right";
        break;
      case 40:
        newDirection = "down";
        break;
      case 32 :
        myGameSnakY.launch();
        // myGameSnakYTwo.launch();
      default:
        return;
    }
    myGameSnakY.snakee.setDirection(newDirection);
    // myGameSnakYTwo.snakee.setDirection(newDirection);
  };
  
}
