function Snake()
{
    this.x = 100;
    this.y = 100;
    this.xCord = 0;
    this.yCord = 0;
    this.total = 0;
    this.tail = [];
    this.Htotal = 0;

    this.draw = function()
    {
        ctx.fillStyle = "#00cc44";

        for (let i=0; i<this.tail.length; i++)
        {
           
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }

        ctx.fillStyle = "#4dff4d";
        
        ctx.fillRect(this.x, this.y, scale, scale);


    }

    this.update = function()
    {
        for(let i=0; i<this.tail.length - 1; i++)
        {
            this.tail[i] = this.tail[i+1];
        }
        
        this.tail[this.total - 1] = {x: this.x, y: this.y};
        
        
        this.x += this.xCord;
        this.y += this.yCord;
        

        if (this.x > 599)
        {
            this.total = 0;
            this.tail = [];
            this.x = 300;
            this.y = 300;
            this.xCord = 0;
            this.yCord = 0;

            gameManager.pickFruitType();

            gameManager.checkTypeBorder();
            gameManager.checkTypeDouble();
            gameManager.checkTypeNormal();
            gameManager.checkTypeMongoose();

            eatenDouble = false;
            eatenBorder = false;
        }

        if (this.x < 0)
        {
            this.total = 0;
            this.tail = [];
            this.x = 300;
            this.y = 300;
            this.xCord = 0;
            this.yCord = 0;

            gameManager.pickFruitType();

            gameManager.checkTypeBorder();
            gameManager.checkTypeDouble();
            gameManager.checkTypeNormal();
            gameManager.checkTypeMongoose();

            eatenDouble = false;
            eatenBorder = false;
        }

        if (this.y > 599)
        {
            this.total = 0;
            this.tail = [];
            this.x = 300;
            this.y = 300;
            this.xCord = 0;
            this.yCord = 0;

            gameManager.pickFruitType();

            gameManager.checkTypeBorder();
            gameManager.checkTypeDouble();
            gameManager.checkTypeNormal();
            gameManager.checkTypeMongoose();

            eatenDouble = false;
            eatenBorder = false;
        }

        if (this.y < 0)
        {
            this.total = 0;
            this.tail = [];
            this.x = 300;
            this.y = 300;
            this.xCord = 0;
            this.yCord = 0;

            gameManager.pickFruitType();

            gameManager.checkTypeBorder();
            gameManager.checkTypeDouble();
            gameManager.checkTypeNormal();
            gameManager.checkTypeMongoose();

            eatenDouble = false;
            eatenBorder = false; 
        }
       
    }

    this.changeDirection = function(direction)
    {
 
        switch(direction)
        {
            case "Up":
		 if ( this.xCord == 0 && this.yCord == 0 || this.xCord == -20 && this.yCord == 0 || this.xCord == 20 && this.yCord == 0)
		{
		 this.xCord = 0;
         this.yCord = -20; 
		}
         break;
 
        case "Down":
        if ( this.xCord == 0 && this.yCord == 0 || this.xCord == -20 && this.yCord == 0 || this.xCord == 20 && this.yCord == 0)
		{
		 this.xCord = 0;
        this.yCord = 20; 
		}
         break;

         case "Left":
                
		if(this.xCord == 0 && this.yCord == 0 || this.xCord == 0 && this.yCord == -20 || this.xCord == 0 && this.yCord == 20)
		{		
		 this.xCord = -20;
                 this.yCord = 0;
		}
                 break;
 
             case "Right":
		if(this.xCord == 0 && this.yCord == 0 || this.xCord == 0 && this.yCord == -20 || this.xCord == 0 && this.yCord == 20)
		{		
		 this.xCord = 20;
                 this.yCord = 0;
		}                 

                 break;
 
        }

    }

    this.eat = function()
    {
        
        if (this.x == fruitDouble.x && this.y == fruitDouble.y )
        {
            this.total++;
         
            
            return true;
        }

        return false;
    }
    
    this.eat2 = function()
    {
        if ( this.x == fruit2.x && this.y == fruit2.y)
        {
            this.total++

            return true;
        }
        return false;
    }

    this.eatBorder = function()
    {
        
        if (this.x == fruitBorder.x && this.y == fruitBorder.y )
        {
            this.total++;
          
            
            return true;
        }

        return false;
    }
    this.eatNormal = function()
    {
        if ( this.x == fruitNormal.x && this.y == fruitNormal.y)
        {
            this.total++

            return true;
        }
        return false;
    }

    this.eatMongoose = function()
    {
        if ( this.x == fruitMongoose.x && this.y == fruitMongoose.y)
        {
            this.total++

            return true;
        }
        return false;
    }

    this.checkCollision = function()
    {
       
        if (this.x == border.x && this.y == border.y) // checking border collision
        {
         console.log("Hit Border1");
        this.total = 0;
        this.tail = [];
        this.x = 300;
        this.y = 300;
        this.xCord = 0;
        this.yCord = 0;
       
        gameManager.pickFruitType(); 

        gameManager.checkTypeBorder();
        gameManager.checkTypeDouble();
        gameManager.checkTypeNormal();
        gameManager.checkTypeMongoose();

        
        eatenDouble = false;
        eatenBorder = false;
        }
        if (this.x == border2.x && this.y == border2.y) // checking border collision
       {
        console.log("Hit Border2");
        this.total = 0;
        this.tail = [];
        this.x = 300;
        this.y = 300;
        this.xCord = 0;
        this.yCord = 0;
       
        gameManager.pickFruitType(); 

        gameManager.checkTypeBorder();
        gameManager.checkTypeDouble();
        gameManager.checkTypeNormal();
        gameManager.checkTypeMongoose();


        eatenDouble = false;
        eatenBorder = false;
        }
        if (this.x == border3.x && this.y == border3.y) // checking border collision
       {
        console.log("Hit Border3");
        this.total = 0;
        this.tail = [];
        this.x = 300;
        this.y = 300;
        this.xCord = 0;
        this.yCord = 0;
       
        gameManager.pickFruitType(); 

        gameManager.checkTypeBorder();
        gameManager.checkTypeDouble();
        gameManager.checkTypeNormal();
        gameManager.checkTypeMongoose();

        
        eatenDouble = false;
        eatenBorder = false;
        }
        if (this.x == border4.x && this.y == border4.y) // checking border collision
       {
        console.log("Hit Border4");
        this.total = 0;
        this.tail = [];
        this.x = 300;
        this.y = 300;
        this.xCord = 0;
        this.yCord = 0;
       
        gameManager.pickFruitType(); 

        gameManager.checkTypeBorder();
        gameManager.checkTypeDouble();
        gameManager.checkTypeNormal();
        gameManager.checkTypeMongoose();

        
        eatenDouble = false;
        eatenBorder = false;
        }
        if (this.x == border5.x && this.y == border5.y) // checking border collision
       {
        console.log("Hit Border5");
        this.total = 0;
        this.tail = [];
        this.x = 300;
        this.y = 300;
        this.xCord = 0;
        this.yCord = 0;
       
        gameManager.pickFruitType(); 

        gameManager.checkTypeBorder();
        gameManager.checkTypeDouble();
        gameManager.checkTypeNormal();
        gameManager.checkTypeMongoose();

        
        eatenDouble = false;
        eatenBorder = false;
        }
        if (this.x == mongoose.x && this.y == mongoose.y ) // checking mongoose collision
       {
        console.log("Killed by Mongoose");   
        this.total = 0;
        this.tail = [];
        this.x = 300;
        this.y = 300;
        this.xCord = 0;
        this.yCord = 0;
        
        gameManager.pickFruitType();
        
        gameManager.checkTypeBorder();
        gameManager.checkTypeDouble();
        gameManager.checkTypeNormal();
        gameManager.checkTypeMongoose();


          eatenDouble = false;
          eatenBorder = false;
     
        }
        for (var i=0; i<this.tail.length; i++) // Checking Tail Collision
        {
            if (this.x == this.tail[i].x && this.tail[i].y == this.y) 
            {
               console.log("Hit Snake Tail"); 
               this.total = 0;
               this.tail = [];
               this.x = 300;
               this.y = 300;
               this.xCord = 0;
               this.yCord = 0;
               
               gameManager.pickFruitType();

               gameManager.checkTypeBorder();
               gameManager.checkTypeDouble();
               gameManager.checkTypeNormal();
               gameManager.checkTypeMongoose();


                 eatenDouble = false;
                 eatenBorder = false;
            
            }
            
        }
        
    }

}