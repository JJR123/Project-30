const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot, ground2, slingshot;

function preload() {
    backgroundImg = loadImage("sprites/background.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(500,380,350,20); 
    ground2 = new Ground(900,250,350,20);

    //platform = new Ground(150, 305, 300, 170);

    box1 = new Box(400,320,70,70);
    box2 = new Box(470,320,70,70);
    //log1 = new Log(810,260,300, PI/2);

    box3 = new Box(540,320,70,70);
    box4 = new Box(610,320,70,70);
    

    //log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(430,180,70,70);
    //log4 = new Log(760,120,150, PI/7);
    //log5 = new Log(870,120,150, -PI/7);

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
    box6.display();
    box7.display();
    box8.display();
    
    box9.display();
    box10.display();
    //log3.display();

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
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}