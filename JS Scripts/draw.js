console.log("<------------------------- Console Log: Cracked Snake Game ------------------------>");
//window.confirm("This game is made by CJ Rucker. \n Craked Snake Game-Copyright 2019");

const cvs = document.querySelector("canvas");
const ctx = cvs.getContext("2d");


// vars
const scale = 20;
const row = cvs.height / scale;
const column = cvs.width / scale;
var snekSpeed = 100;

var eatenBorder = false;


(function setup()
{

     // snake
     snake = new Snake();

     // mongoose
     mongoose = new Mongoose();

     // fruit
     fruitDouble = new Fruit();
     fruitNormal = new Fruit();
     fruit2 = new Fruit();
     fruitBorder = new FruitBorder();
     fruitMongoose = new FruitMongoose();

     gameManager = new GameManager();
     
     // Border
     border = new Border();
     border2 = new Border();
     border3 = new Border();
     border4 = new Border();
     border5 = new Border()

     // Pick fruit Type
     gameManager.pickFruitType();
     
     // pick locations
     if (gameManager.fruitType == "Frenzy")
     {
        fruitDouble.pickLocation();
        fruit2.pickLocation();
     }
     if (gameManager.fruitType == "Border")
     {
        fruitBorder.pickLocation();
        border.pickLocation();
        border2.pickLocation();
        border3.pickLocation();
        border4.pickLocation();
        border5.pickLocation();
     }
     if (gameManager.fruitType == "Normal")
     {
         fruitNormal.pickLocation();
     }
     if (gameManager.fruitType == "Mongoose")
     {
         fruitMongoose.pickLocation();
         mongoose.pickLocation();
     }
 
     // logging the fruit types
     console.log("Fruit Type: ", gameManager.fruitType);
     console.log("FruitBorder: ", fruitBorder);
     console.log("FruitNormal: ", fruitNormal);
     console.log("FruitDouble: ", fruitDouble);
     console.log("FruitMongoose: ", fruitMongoose);
     console.log("Second Fruit", fruit2);
     console.log("Border1: ", border);
     console.log("Border2: ", border2);
     console.log("Border3: ", border3);
     console.log("Border4: ", border4);
     console.log("Border5: ", border5);

     
    window.setInterval(() =>
    {
    
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    snake.update();
    
    if (gameManager.fruitType == "Border")
    {
       fruitBorder.draw();
        border.draw();
        border2.draw();
        border3.draw();
        border4.draw();
        border5.draw();
    }
    if (gameManager.fruitType == "Normal")
    {
        fruitNormal.draw();
    }
    
    if (gameManager.fruitType == "Frenzy")
    {
        fruitDouble.draw();
        fruit2.draw();
    }
    if (gameManager.fruitType == "Mongoose")
    {
        fruitMongoose.draw();
        mongoose.draw();
        mongoose.spawn();
    }

    snake.draw();

    ctx.fillStyle = "#000000";
    ctx.font = "50px Arial";
    ctx.fillText(snake.total, 10, 50);

    // Snake Eating 
    if (snake.eatBorder(fruitBorder))
    {
        console.log("Eating Fruit Border");
        gameManager.pickFruitType();
        
        // Chooses a location
        gameManager.checkTypeBorder();
        gameManager.checkTypeDouble();
        gameManager.checkTypeNormal();
        gameManager.checkTypeMongoose();
        
        eatenBorder = true;
    }
    if (snake.eat(fruitDouble))
    {
        console.log("Eating The Second Fruit");
        gameManager.pickFruitType();
        
        gameManager.checkTypeBorder();
        gameManager.checkTypeDouble();
        gameManager.checkTypeNormal();
        gameManager.checkTypeMongoose();


        eatenBorder = false;
    } 
    if (snake.eat2(fruit2))
    {
        console.log("Eating Fruit Double");
        
        fruit2.pickLocation();
        eatenBorder = false;
    }
    if (snake.eatNormal(fruitNormal))
    {
        console.log("Eating Fruit Normal");
        gameManager.pickFruitType();
        
        gameManager.checkTypeBorder();
        gameManager.checkTypeDouble();
        gameManager.checkTypeNormal();
        gameManager.checkTypeMongoose();

        
        eatenBorder = false;
    } 
    if (snake.eatMongoose(fruitMongoose))
    {
        console.log("Eating Fruit Mongoose");
        gameManager.pickFruitType();
        
        gameManager.checkTypeBorder();
        gameManager.checkTypeDouble();
        gameManager.checkTypeNormal();
        gameManager.checkTypeMongoose();

        
        eatenBorder = false;
    } 
    // Snake Eating ^^^
    
    
    // checks for snake collision
    snake.checkCollision();

    }, snekSpeed);

}());

window.addEventListener('keydown' , ((evt) =>
{
    const direction = evt.key.replace('Arrow', '');
    snake.changeDirection(direction);
   
}))

