export default class Snake {
    constructor(direction,...body) {
      this.body = body;
      this.direction= direction;
      this.EatApple = false;
    }
    advance() {
      const nextPosition = this.body[0].slice();
      switch(this.direction)
      {
        case "left":
          nextPosition[0] -= 1;
          break;
        case "right":
           nextPosition[0] += 1;
          break;
        case "down":
          nextPosition[1] += 1;
          break;
        case "up":
            nextPosition[1] -= 1;
          break;
        default:
          throw("invalid direction");
      }
      this.body.unshift(nextPosition);
      if(!this.EatApple)
         this.body.pop();
      else
        this.EatApple = false;
    };
    setDirection(newDirection) {
      let allowedDirections;
      switch(this.direction)
      {
        case "left":
        case "right":
           allowedDirections = ["up" , "down"];
          break;
        case "down":
        case "up":
            allowedDirections = ["left" , "right"];
       break;
      default:
        throw("invalid direction");
      }
      if (allowedDirections.includes(newDirection))
      {
          this.direction = newDirection;
      }
    };
    checkCollision(widthInBlock,heightInBlock) {
      let wallCollision = false;
      let SnakeCollision = false;
      const head = this.body[0];
      const rest = this.body.slice(1);
      const SnakeX = head[0];
      const SnakeY = head[1];
      const minX = 0;
      const minY = 0;
      const maxX = widthInBlock -1 ;
      const maxY = heightInBlock -1 ;
      const isNotBetweenHorizontaleWall = SnakeX < minX || SnakeX > maxX;
      const isNotBetweenVerticaleWall = SnakeY < minY || SnakeY > maxY;
      if( isNotBetweenHorizontaleWall || isNotBetweenVerticaleWall)
      {
        wallCollision = true;
      }
      for ( let block of rest){
        if(SnakeX === block[0] && SnakeY === block[1])
        {
          SnakeCollision = true;
        }
      }
      return wallCollision || SnakeCollision;
    }
    isEatngApple (appleToEat) {
      const head = this.body[0];
      if(head[0]=== appleToEat.position[0] && head[1]=== appleToEat.position[1])
        return true;
      else
        return false;
    }
};