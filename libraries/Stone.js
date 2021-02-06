class Stone
{
   constructor(xpos,ypos,radius)
   {
     var Body_options = {isStatic: false,restitution: 0, friction: 1, density: 1.2}
     this.body = Bodies.circle(xpos,ypos,radius/2,Body_options);
     this.radius = radius;
     this.image = loadImage("images/stone.png");

     World.add(world,this.body);
   }

   display()
   {
     var position = this.body.position;

     ellipseMode(RADIUS);
     imageMode(CENTER);
     //ellipse(position.x,position.y,this.radius,this.radius);
     image(this.image,position.x,position.y,this.radius+10,this.radius+10);
   }
}