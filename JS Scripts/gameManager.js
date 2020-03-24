function GameManager()
{

this.fruitType

this.pickFruitType = function () 
{
var Type = ["Frenzy", "Border", "Mongoose", "Normal", "Normal"
/*, "Mongoose", "Mongoose", "Mongoose", "Mongoose", "Mongoose", "Mongoose", "Mongoose", "Mongoose", "Mongoose", "Mongoose", "Mongoose", "Mongoose", "Mongoose", "Mongoose"*/ ];
    var index = Math.floor(Math.random() * Type.length);
    this.fruitType = Type[index];
}

this.resetBorder = function ()
{
    border.x = 700;
    border.y = 700;

    border2.x = 700;
    border2.y = 700;
    
    border3.x = 700;
    border3.y = 700;
    
    border4.x = 700;
    border4.y = 700;
    
    border5.x = 700;
    border5.y = 700;
    
    fruitBorder.x = 700;
    fruitBorder.y = 700;
}
this.resetFruitDouble = function ()
{
    fruitDouble.x = 700;
    fruitDouble.y = 700;
    
    fruit2.x = 700;
    fruit2.y = 700;
}
this.resetFruitNormal = function ()
{
    fruitNormal.x = 700;
    fruitNormal.y = 700;
}
this.resetMongoose = function ()
{
    fruitMongoose.x = 700;
    fruitMongoose.y = 700;

    mongoose.disable = true;
    mongoose.x = 700;
    mongoose.y = 700;
}


this.checkTypeBorder = function ()
{
    if (gameManager.fruitType == "Border")
    {
       console.log("Spawned Type: Border");
       fruitBorder.pickLocation();
       border.pickLocation();
       border2.pickLocation();
       border3.pickLocation();
       border4.pickLocation();
       border5.pickLocation();

       gameManager.resetFruitNormal();
       gameManager.resetFruitDouble();
    }

}
this.checkTypeNormal = function ()
{
    if (gameManager.fruitType == "Normal")
    {
        console.log("Spawned Type: Normal");
        fruitNormal.pickLocation();

        gameManager.resetMongoose();
        gameManager.resetBorder();
        gameManager.resetFruitDouble();
    }

}
this.checkTypeDouble = function ()
{
    if (gameManager.fruitType == "Frenzy") 
    {
       console.log("Spawned Type: Double");
       fruitDouble.pickLocation();
       fruit2.pickLocation();

       gameManager.resetMongoose();
       gameManager.resetFruitNormal();
       gameManager.resetBorder();
    }

}
this.checkTypeMongoose = function ()
{
    if (gameManager.fruitType == "Mongoose")
    {
        fruitMongoose.pickLocation();
        mongoose.pickLocation();
        mongoose.spawn();

        gameManager.resetBorder();
        gameManager.resetFruitDouble();
        gameManager.resetFruitNormal();
    }
}



}
