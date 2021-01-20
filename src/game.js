import Snake from "./snake.js";
import Draw from "./draw.js";
import Apple from "./apple.js";

export default class Game {    
    constructor(canvasWidht=900,canvasheight=600) {
      this.canvasWidht = canvasWidht;
      this.canvasheight = canvasheight;
      this.blockSize = 30;
      this.canvas = document.createElement('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.widthInBlock = this.canvasWidht /this.blockSize;
      this.heightInBlock = this.canvasheight /this.blockSize;
      this.centreX = this.canvasWidht/2;
      this.centreY = this.canvasheight/2;
      this.delay = 150;
      this.snakee;
      this.applee;
      this.score;
      this.timeOut;
    } 

    init() {
      this.canvas.width = this.canvasWidht;
      this.canvas.height = this.canvasheight;
      this.canvas.style.border= "30px solid #27D5C0";
      this.canvas.style.display="block";
      this.canvas.style.margin="50px auto";
      // this.canvas.style.backgroundColor="#fff"
      document.body.appendChild(this.canvas);
      this.launch();
    }

    launch() {
      this.snakee = new Snake ("right",[6,4],[5,4],[4,4],[3,4],[2,4]);
      this.applee = new Apple();
      this.score=0;
      clearTimeout(this.timeOut);
      this.delay=150;
      this.refreshCanvas();
    }
  
    refreshCanvas() {
      this.snakee.advance();
      if(this.snakee.checkCollision(this.widthInBlock,this.heightInBlock))
      { 
      Draw.gameOver(this.ctx,this.centreX,this.centreY);
      }
      else 
      {
        if(this.snakee.isEatngApple(this.applee))
        {
          this.score++;
          this.snakee.EatApple = true;
          do
          {
            this.applee.setnewPosition(this.widthInBlock,this.heightInBlock);
          }
          while(this.applee.isOnsnake(this.snakee));
          if (this.score % 5 == 0){
            this.speedUp();
          }
        }
        this.ctx.clearRect(0,0,this.canvasWidht,this.canvasheight);
        Draw.drawScore(this.ctx,this.centreX,this.centreY,this.score);
        Draw.drawSnake(this.ctx,this.blockSize,this.snakee)
        Draw.drawApple(this.ctx,this.blockSize,this.applee);
        this.timeOut=setTimeout(this.refreshCanvas.bind(this),this.delay);
      }
    }
  
    speedUp() {
      this.delay/= 1.25;
    }

  };