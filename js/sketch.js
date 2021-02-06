
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var world;
var ground1,boy;
var stone1, launcher;
var tree, mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8; 

function preload()
{
    boy = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	tree = new Tree(1050,580);
	mango1 = new Mango(1100,100,30);
    mango2 = new Mango(900,200,25);
	mango3 = new Mango(1120,200,30);
    mango4 = new Mango(1200,200,20);
	mango5 = new Mango(1000,100,20);
	mango6 = new Mango(1050,155,30);
	mango7 = new Mango(980,230,30);
	mango8 = new Mango(1165,145,25);
	ground1 = new ground(width/2,600,width,20);
	stone1 = new Stone(220,390,25,100);
	launcher = new Rope(stone1.body,{x : 240,y : 420})

  text("Press space to get more chances", 200,200) ;

	Engine.run(engine);

}

function draw() 
{
	
   background(230);
   //Add code for displaying text here!
   image(boy ,200,340,200,300);

   ground1.display();
   launcher.display();
   tree.display();
   mango1.display();
   mango2.display();
   mango3.display();
   mango4.display();
   mango5.display();
   mango6.display();
   mango7.display();
   mango8.display();
   stone1.display();

   detectCollision(stone1, mango1);
   detectCollision(stone1, mango2);
   detectCollision(stone1, mango3);
   detectCollision(stone1, mango4);
   detectCollision(stone1, mango5);
   detectCollision(stone1, mango6);
   detectCollision(stone1, mango7);
   detectCollision(stone1, mango8);
}

function mouseDragged()
{
	Matter.Body.setPosition(stone1.body,{x : mouseX, y : mouseY})
}

function mouseReleased()
{
	launcher.fly();
}

function keyPressed()
{
  if (keyCode === 32)
  {
    Matter.Body.setPosition(stone1.body, {x: 235, y: 420})
    launcher.attach(stone1.body)
  }
}

function detectCollision(lstone,lmango)
{
   MangoBodyPosition = lmango.body.position
   StoneBodyPosition = lstone.body.position

   var distance = dist(StoneBodyPosition.x, StoneBodyPosition.y, MangoBodyPosition.x, MangoBodyPosition.y)
   console.log(distance + " " + lmango.r + lstone.radius)
   if (distance <= lmango.r + lstone.radius)
   {
      Matter.Body.setStatic(lmango.body, false);
   }
}