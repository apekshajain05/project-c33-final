const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, enemy1,enemy2,enemy3;
var platform;
var player1, slingshot;
var score=0;
var gameState = "onSling";




function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    enemy1 = new enemy(810, 350);
    log1 = new Log(810,260,300, PI/2);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    enemy2 = new enemy(810, 220);
    log3 =  new Log(810,180,300, PI/2);
    box5 = new Box(700,160,70,70);
    box6=new Box(920,160,70,70);
    enemy3=new enemy(810,138);
   // log4 = new Log(760,120,150, PI/7);
    //log5 = new Log(870,120,150, -PI/7);
    //log6= new Log()
    player1 = new player(200,50);
     slingshot = new SlingShot(player1.body,{x:200, y:50});
}

function draw(){
    background("lightblue");
    textSize(30);
    fill("white");
    text("Score "+score,900,50);
    Engine.update(engine);
    fill("black");
    textSize(15);
    text("Press Space to play again",10,20);
    
    box1.display();
    box2.display();
    ground.display();
    enemy1.display();
    enemy1.score();
    log1.display();
    box3.display();
    box4.display();
    enemy2.display();
    enemy2.score();
    log3.display();
    box5.display();
    box6.display();
    enemy3.display();
    // log4.display();
    // log5.display();
    player1.display();
    platform.display();
    slingshot.display(); 
   console.log(enemy3.Visiblity);
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(player1.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}
function keyPressed(){
    if(keyCode === 32){
       
        Matter.Body.setPosition(player1.body,{x:200,y:50});
       slingshot.attach(player1.body);
       gameState='onSling';
    }
}



 