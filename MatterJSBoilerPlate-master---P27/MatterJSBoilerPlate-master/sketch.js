
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var bob1,bob2,bob3,bob4,bob5
var rope1,rope2,rope3,rope4,rope5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = createSprite(400,300,800,10);
	ground.shapeColor = "yellow";

	bob1 = new Bob(400,500,20,20);
	bob2 = new Bob(420,500,20,20);
	bob3 = new Bob(440,500,20,20);
	bob4 = new Bob(380,500,20,20);
	bob5 = new Bob(360,500,20,20);

	rope1 = new Rope (bob1.body,ground.body,2,0);
	rope2 = new Rope (bob2.body,ground.body,2,0);
	rope3 = new Rope (bob3.body,ground.body,2,0);
	rope4 = new Rope (bob4.body,ground.body,2,0);
	rope5 = new Rope (bob5.body,ground.body,2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  drawSprites();
 
}



