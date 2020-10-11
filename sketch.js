var roofBody,bobBody1,bobBody2,bobBody3,bobBody4,bobBody5,ropeBody
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roofBody = new roof(400,50,600,50);
	bobBody1 = new bob(200,600,80);
	bobBody2 = new bob(300,600,80);
	bobBody3 = new bob(400,600,80);
	bobBody4 = new bob(500,600,80);
	bobBody5 = new bob(600,600,80);
	ropeBody1 = new rope(roofBody.body,bobBody1.body,-200,40);
	ropeBody2 = new rope(roofBody.body,bobBody2.body,-100,40);
	ropeBody3 = new rope(roofBody.body,bobBody3.body,0,40);
	ropeBody4 = new rope(roofBody.body,bobBody4.body,100,40);
	ropeBody5 = new rope(roofBody.body,bobBody5.body,200,40);


	Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background("white");
  roofBody.display();
  bobBody1.display();
  bobBody2.display();
  bobBody3.display();
  bobBody4.display();
  bobBody5.display();
  ropeBody1.display();
  ropeBody2.display();
  ropeBody3.display();
  ropeBody4.display();
  ropeBody5.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		//Matter.Body.applyForce(bobBody1.body,bobBody1.body.position,{x:150,y:-200});
	}
}