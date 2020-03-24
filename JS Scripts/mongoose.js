function Mongoose ()
{
 this.disable = true;
 this.x;
 this.y;

 


this.pickLocation = function()
 {
    var rtCorner = [0 , 0];
    var ltCorner = [600, 0];
    var rbCorner = [0, 600];
    var lbCorner = [600, 600];
    var check = [rtCorner, ltCorner, rbCorner, lbCorner]
    var Pos = Math.floor(Math.random() * check.length);
    this.x = check[Pos];
    this.y = check[Pos];
    
    
    /*
    this.x = (Math.floor(Math.random() * row - 1) + 1) * scale;
     this.y = (Math.floor(Math.random() * column - 1) + 1) * scale;
     
     if (this.x == 300 && this.y == 300)
     {
      this.x = (Math.floor(Math.random() * row - 1) + 1) * scale;
      this.y = (Math.floor(Math.random() * column - 1) + 1) * scale;
     }
     */
}
this.draw = function()
 {
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(this.x, this.y, scale, scale) 
}


this.spawn = function()
{
    this.disable = false;
    if(this.disable == false)
    {
        if (snake.x < this.x)
        {
            this.x -= 20;
        }
        if (snake.x > this.x)
        {
            this.x += 20;
        }if (snake.y < this.y)
        {
            this.y -= 20;
        }if (snake.y > this.y)
        {
            this.y += 20;
        }

    }
}


}