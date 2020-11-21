const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj, paperObject,groundObject	
var world;

function preload()
{
	
}

function setup() 
class paper
{
	constructor (x,y,r)
{
	var options={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2,


	}
	this.x=x;
	this.y=y;
	this.r=r;
	this.body=Bodies.circle(this.x, this.y, this.r/2, options)
	World.add(world, this.body);

}
display()
{

	var paperpos=this.body.position;

	push()
	translate(paperpos.x, paperpos.y);
	rectMode(CENTER)
	strokeWeight(3);
	fill(255,0,255)
	ellipse(0,0,this.r, this.r);
	pop()

}
}


{
	createCanvas(1600, 700);
rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,650);
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);

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
  
  dustbinObj.display();
  paperObject.display();
  groundObject.display();

}
  drawSprites();
 
  function keypressed()
{
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}






