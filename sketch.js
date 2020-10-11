
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, ball, paper1, box1, box2, box3;

function preload()
{
	


	
}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,370,1200,20);

	box1 = new Box(900,350,200,15);
	box2 = new Box(800,300, 15, 100);
	box3 = new Box(1000, 300, 15, 100);

	paper1 = new Paper(100,300);


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	ground.display();
	box1.display();
	box2.display();
	box3.display();
	paper1.display();


	Engine.update(engine);
 
}


function keyPressed () {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:75, y:-75});

	}
}














