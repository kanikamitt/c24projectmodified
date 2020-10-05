//var  wasteSprite;
var wasteBody,ground,box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

//	wasteSprite=createSprite(width/2, 80, 20,20);
	

	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow");

	//box1=createSprite(800,height-50,120,20)
	//box1.shapeColor=color("purple");

	//box2=createSprite(850,height-80,20,80)
	//box2.shapeColor=color("purple");

	//box3=createSprite(750,height-80,20,80)
	//box3.shapeColor=color("purple");



	//wasteBody = Bodies.circle(200 , 450 , 40 , {restitution:0.4, isStatic:false});
   // World.add(world, wasteBody);

	
	

	//Create a Ground
	ground = new Ground(width/2,670,width,20);
 	
	paper=new Paper(200,450,40);

	log1 = new Log(800,height-50,120,20);
	log2 = new Log(850,height-80,20,80);
	log3= new Log(750,height-80,20,80);

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	   width: 1200,
	   height: 700,
	   wireframes: false
	 }
	});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //wasteSprite.x= wasteBody.position.x 
 // wasteSprite.y= wasteBody.position.y 
  //box1.display();
 // box2.display();
  //box3.display();
  //wasteSprite.bounceOff(box1);
 // wasteSprite.bounceOff(box2);
 // wasteSprite.bounceOff(ground);
  paper.display();
  log1.display();
  log2.display();
  log3.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body,paper.body.postition,{x:65,y:-65}); 
		
    }
    
  }

  