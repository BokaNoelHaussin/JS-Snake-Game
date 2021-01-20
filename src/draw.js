export default class Draw {

    static gameOver(ctx,centreX,centreY) {
      ctx.save();
      ctx.font="bold 70px sans-serif";
      ctx.fillStyle="#000";
      ctx.textAlign="center";
      ctx.textBaseline="middle";
      ctx.strokeStyle ="white";
      ctx.lineWidth = 5;
      ctx.strokeText('Game over',centreX,centreY-180);
      ctx.fillText('Game over',centreX,centreY-180);
      ctx.font="bold 30px sans-serif";
      ctx.strokeText('Appuyer sur la touche Espace pour rejouer',centreX,centreY-120);
      ctx.fillText('Appuyer sur la touche Espace pour rejouer',centreX,centreY-120);
      ctx.restore();
    };

    static drawScore(ctx,centreX,centreY,score) {
      ctx.save();
      ctx.font="bold 200px sans-serif";
      ctx.fillStyle="#fff";
      ctx.textAlign="center";
      ctx.textBaseline="middle"
      ctx.fillText(score.toString(),centreX,centreY);
      ctx.restore();
    };

    static drawSnake(ctx,blockSize,Snake) {
      ctx.save();
      ctx.fillStyle="#051937";
      for (let block of Snake.body){
        this.drawBlock(ctx,block,blockSize);
      }
      ctx.restore();
    };

    static drawApple(ctx,blockSize,Apple) {
      const radius = blockSize/2;
      const x = Apple.position[0]*blockSize + radius;
      const y = Apple.position[1]*blockSize + radius;
      ctx.save();
      ctx.fillStyle="#A8EB12";
      ctx.beginPath()
      ctx.arc(x,y,radius,0,Math.PI*2, true);
      ctx.fill();
      ctx.restore();
    };

    static drawBlock(ctx,position,blockSize) {
      const [x,y] =position
      ctx.fillRect(x *blockSize,y*blockSize,blockSize,blockSize);
    };

};