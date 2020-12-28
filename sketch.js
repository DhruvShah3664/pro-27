
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render= Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(380, 100, 450, 30);
	
	bob1 = new Bob(220, 500, 80);
	bob2 = new Bob(300, 500, 80);
	bob3 = new Bob(380, 500, 80);
	bob4 = new Bob(460, 500, 80);
	bob5 = new Bob(540, 500, 80);

	

	rope1 = new Rope(bob1.body, roof.body, -160 , 0);
	
	rope2 = new Rope(bob2.body, roof.body, -80 , 0);

	rope3 = new Rope(bob3.body, roof.body, 0 , 0);
	
	rope4 = new Rope(bob4.body, roof.body, 75, 0);

	rope5 = new Rope(bob5.body, roof.body, 155 , 0);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keypressed(){
	if(keycode === 32 	){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-730, y:0});
	}
}

