class Ground{
    constructor(x,y,width,height){

        var G_options = {
            isStatic : true
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(x,y,width,height,G_options)

        World.add(world,this.body)

    }
    display(){

        rectMode(CENTER)
        fill("brown")
        rect(this.body.position.x,this.body.position.y,this.width,this.height)

    }
}