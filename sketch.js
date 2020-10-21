var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var container1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 container1 = new container(400,650,200,20);
	 container2 = new container(310,610,20,100);
	 container3 = new container(510,610,20,100);
	 
	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  container1.display();
  container2.display();
  container3.display();

  

  drawSprites();
 
  
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false); 
  }

  
}
function hasCollided(lpackageBody,lcontainer1) {
	packageBodyRightEdge= lpackageBody.x +lpackageBody.width;
	container1LeftEdge = lcontainer1.x;
   if (packageBodyRightEdge>=container1LeftEdge) {
     return true
   }
   return false;
  }

  if(hasCollided(packageBody,container1)) {
	Matter.Body.setStatic(packageBody, true);
  }


