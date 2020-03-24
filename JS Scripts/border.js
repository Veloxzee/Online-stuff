function Border()
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
    ctx.fillStyle = "#262729";    //"#757575"
    ctx.fillRect(this.x, this.y, scale, scale);
}






}