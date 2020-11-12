class Box{
    constructor(x,y){
        var options = {
            'isStatic' : false,
            'density' : 1.2,
            'friction' : 0.2,
            'restitution' : 0
        }
        this.block = Bodies.rectangle(x,y,50,50,options)
        this.width = 50;
        this.height = 50;
        World.add(world,this.block)
    }
    display(){
        var angle = this.block.angle;
        
        push();
        fill("cyan")
        strokeWeight(1) 
        stroke(0)
        translate(this.block.position.x, this.block.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
        
    }
}