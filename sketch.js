
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,ground;
var box1,box2,box3;

function preload()
{
	dustbinImage = loadImage("dustbingreen.png");	
	
}

function setup() {
	createCanvas(1600, 500);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	paper1 = new paper(200,400,40);
	ground1 = new Ground(800,497,1600,10);
	box1 = new box(905,450,15,150);
	box2 = new box(1065,450,15,150);
	box3 = new box(985,495,145,15);
	
}


function draw() {
 
  
  background("yellow");


 


  box1.display();
  box2.display();
  box3.display();
  paper1.display();
  ground1.display();
  
 
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:125,y:-120})
}
}



