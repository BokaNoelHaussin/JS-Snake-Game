
export default  class Apple {
    constructor(position =[10,10]) {
    this.position = position;
    }

    setnewPosition(widthInBlock,heightInBlock) {
      const newX = Math.round(Math.random()* (widthInBlock -1));
      const newY = Math.round(Math.random()* (heightInBlock -1));;
      this.position= [newX,newY];
    };
    isOnsnake(snakeToCheck) {
      let isOnsnake = false;
      for ( let block of snakeToCheck.body)
       {
         if(this.position[0]=== block[0] && this.position[1] === block[1])
         {
           isOnsnake = true;
         }
         return isOnsnake
       }
    }
}; 