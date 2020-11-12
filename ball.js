class Ball {
    constructor(x, y) {
      var Boptions = {
          'frictionAir':0.005,
          'density':1
      }
      this.x = x;
      this.y = y;
      this.radius = 30;
      this.body = Bodies.circle(x, y,this.radius, Boptions);
      
      World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x,this.body.position.y)
      ellipseMode(RADIUS);
      stroke(58, 6, 82)
      fill("red");
      ellipse(0,0, this.radius,this.radius);
      pop();
    }
  };