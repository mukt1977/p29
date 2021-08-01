const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground,ball,holder,stand1,stand2,slingShot,polygon_img,block;


//function preload(){

   // ball=loadImage("polygon.png");
//}
function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    
    ground=new Ground();
    stand1=new Stand(380,300,270,10);
    stand2=new Stand(700,200,200,10);
    block1=new Block(280,275,30,40);
    block2=new Block(310,275,30,40);
    block3=new Block(340,275,30,40);
    block4=new Block(370,275,30,40);
    block5=new Block(310,235,30,40);
    block6=new Block(340,235,30,40);
    block7=new Block(370,235,30,40);
    block8=new Block(340,195,30,40);
    block9=new Block(370,195,30,40);
    block10=new Block(355,155,30,40);

    block11=new Block(640,175,30,40);
    block12=new Block(670,175,30,40);
    block13=new Block(700,175,30,40);
    block14=new Block(730,175,30,40);
    block15=new Block(760,175,30,40);
    block16=new Block(670,135,30,40);
    block17=new Block(700,135,30,40);
    block18=new Block(730,135,30,40);
    block19=new Block(700,95,30,40);

    ball=Bodies.circle(20,200,20);
    World.add(world,ball);

    slingShot=new SlingShot(this.ball,{x:200,y:200});
    

}

function draw(){
background("grey");
Engine.update(engine);
stand1.display();
stand2.display();
stroke(15);
fill("black");
block1.display();
block2.display();
block3.display();
block4.display();
fill("purple")
block5.display();
block6.display();
block7.display();
fill("pink")
block8.display();
block9.display();
fill("orange")
block10.display();
fill("green")
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
fill("blue")
block16.display();
block17.display();
block18.display();
fill("red");
block19.display();

text("drag the line and release to hit the boxes",600,250)
ellipse(ball.position.x,ball.position.y,20);
slingShot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});

}
function mouseReleased(){
   slingShot.fly();
    
}
