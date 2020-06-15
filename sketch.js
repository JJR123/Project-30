const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingshot, ground2;
var gameState = "onSling";

function preload() {
    backgroundImg = loadImage("sprites/background.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(550,380,350,20); 
    ground2 = new Ground(900,250,350,20);

  

    box1 = new Box(450,320,70,70);
    box2 = new Box(520,320,70,70);
   

    box3 = new Box(590,320,70,70);
    box4 = new Box(660,320,70,70);
    

    

    box5 = new Box(570,210,70,70);
    
    bird = new Bird(200,50);

    box6=new Box(500,180,70,70); 
    box7=new Box(570,180,70,70); 
    box8=new Box(500,100,70,70); 
      
    box9 = new Box(830,230,70,70);
    box10 = new Box(870,230,70,70);
    
    box11= new Box(940,230,70,70);
    box12 = new Box(1010,230,70,70);
    box13=new Box(880,180,70,70); 

    
    box14=new Box(900,180,70,70); 
    box15=new Box(990,180,70,70); 
    box16=new Box(950,100,70,70); 
    slingshot = new SlingShot(bird.body,{x:200, y:50});

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    

    box3.display();
    box4.display(); 
   
    box9.display();
    box10.display();
  
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display();
    box16.display();
    box5.display();
   
    bird.display();
    
    slingshot.display();    
    ground2.display();
}


function mouseDragged(){
    if (gameState==="onSling"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY}); 
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}   

function keyPressed(){
    if(keyCode === 32 ){
       slingshot.attach(bird.body); 
    gameState="onSling" ;
    }
} 




