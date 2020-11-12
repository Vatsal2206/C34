class Chain{
    constructor(bodyA,pointB){
       var options = {
           bodyA : bodyA,
           pointB : pointB,
           stiffness : 1.2,
           length : 200
       }
   this.pointB = pointB;
   this.sling = Constraint.create(options)
   World.add(world, this.sling)
    }
   
   display(){
       fill(255)
       strokeWeight(5)
       stroke(255)
       if(this.sling.bodyA){
           var pointA = this.sling.bodyA.position;
           var pointB = this.pointB;
           line(pointA.x,pointA.y,pointB.x,pointB.y)   
       }
   
   }
   }