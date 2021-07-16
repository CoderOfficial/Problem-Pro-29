
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;



ground1 = new Ground(350,360,300,10)
ground2 = new Ground(650,300,300,10)
ground3 = new Ground(505,150,10,300)
box1 = new Box(400,359,30,60)
box2 = new Box(395,359,30,60)
box3 = new Box(390,359,30,60)
box4 = new Box(385,359,30,60)
box5 = new Box(380,359,30,60)
box6 = new Box(375,359,30,60)
box7 = new Box(370,359,30,60)
box8 = new Box(365,359,30,60)
box9 = new Box(360,359,30,60)
box10 = new Box(355,359,30,60)

box11 = new Box(600,200,30,60)
box12 = new Box(595,200,30,60)
box13 = new Box(590,200,30,60)
box14 = new Box(585,200,30,60)
box15 = new Box(580,200,30,60)
box16 = new Box(575,200,30,60)
box17 = new Box(570,200,30,60)
box18 = new Box(565,200,30,60)
box19 = new Box(560,200,30,60)
box20 = new Box(555,200,30,60)


}

function draw() {
  background(0);  
  Engine.update(engine);
ground1.display();
ground2.display();
box5.display();
box6.display();
box7.display();
box4.display();
box8.display();
box3.display();
box9.display();
box2.display();
box10.display();
box1.display();
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

  drawSprites();
}