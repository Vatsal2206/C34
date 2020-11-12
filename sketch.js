const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;

var ground1;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21;

var ball,chain;

function setup() {
  createCanvas(800,600);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(400,580,800,10)

  box1 = new Box(600,575)
  box2 = new Box(550,575)
  box3 = new Box(500,575)

  box4 = new Box(600,525)
  box5 = new Box(550,525)
  box6 = new Box(500,525)

  box7 = new Box(600,475)
  box8 = new Box(550,475)
  box9 = new Box(500,475)

  box10 = new Box(600,425)
  box11 = new Box(550,425)
  box12 = new Box(500,425)

  box13 = new Box(600,375)
  box14 = new Box(550,375)
  box15 = new Box(500,375)

  box16 = new Box(600,325)
  box17 = new Box(550,325)
  box18 = new Box(500,325)

  box19 = new Box(600,275)
  box21 = new Box(550,275)
  box20 = new Box(500,275)

  ball = new Ball(390,400)

  chain = new Chain(ball.body,{x:390,y:200})


}

function draw() {
  background(0);
  
  Engine.update(engine)
  drawSprites();

  ground1.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  ball.display();
  chain.display();


}

function mouseDragged(){

  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})

}