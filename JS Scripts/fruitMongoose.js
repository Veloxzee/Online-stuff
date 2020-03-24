function FruitMongoose()
{
    this.x;
    this.y;
    

    this.pickLocation = function()
    {
        this.x = (Math.floor(Math.random() * row - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * column - 1) + 1) * scale;
    }



    this.draw = function()
    {
      
        var image = new Image();
        image.src = "Apple2.png";
        ctx.drawImage(image, this.x, this.y, scale, scale);
       
    }

    
}

/* 

<-- Keep this code if something bad happends -->
       
    ctx.fillStyle = "#FF0000";
        
    ctx.fillRect(this.x, this.y, scale, scale)
       
*/
