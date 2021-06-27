const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform1, platform2;
var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12;
var block13, block14, block15;
var block16;
var block17, block18, block19, block20, block21;
var block22, block23, block24;
var block25;
var polygon, polygonImg;
var slingshot;
var score;

function preload(){
    polygonImg = loadImage("polygon.png");
}

function setup(){
    createCanvas(900, 400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground = new Ground(450, 390, 900, 10);

    platform1 = new Ground(700, 200, 200, 10);
    platform2 = new Ground(390, 300, 250, 10);

    block1 = new Block(390, 275, 30, 40);
    block2 = new Block(360, 275, 30, 40);
    block3 = new Block(330, 275, 30, 40);
    block4 = new Block(300, 275, 30, 40);
    block5 = new Block(420, 275, 30, 40);
    block6 = new Block(450, 275, 30, 40);
    block7 = new Block(480, 275, 30, 40);

    block8 = new Block(390, 235, 30, 40);
    block9 = new Block(360, 235, 30, 40);
    block10 = new Block(330, 235, 30, 40);
    block11 = new Block(420, 235, 30, 40);
    block12 = new Block(450, 235, 30, 40);

    block13 = new Block(390, 195, 30, 40);
    block14 = new Block(360, 195, 30, 40);
    block15 = new Block(420, 195, 30, 40);

    block16 = new Block(390, 155, 30, 40);

    block17 = new Block(700, 175, 30, 40);
    block18 = new Block(670, 175, 30, 40);
    block19 = new Block(640, 175, 30, 40);
    block20 = new Block(730, 175, 30, 40);
    block21 = new Block(760, 175, 30, 40);

    block22 = new Block(700, 135, 30, 40);
    block23 = new Block(670, 135, 30, 40);
    block24 = new Block(730, 135, 30, 40);

    block25 = new Block(700, 95, 30, 40);

    polygon = Bodies.circle(50, 200, 20);
    World.add(world, polygon);

    slingshot = new Slingshot(this.polygon, {x: 100, y: 200});
}
score = 0;

function draw(){
    background(255);
    Engine.update(engine);
    rectMode(CENTER);
    
    fill("grey");
    textFont("Source Code Pro");
    text("Drag the hexagonal stone and release it to launch it towards the block.", 100, 50);
    text("Score: " + score, 850, 50);

    platform1.display();
    platform2.display();

    ground.display();

    fill("skyblue");

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();

    fill("pink");

    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();

    fill("turquoise");

    block13.display();
    block14.display();
    block15.display();

    block13.score();
    block14.score();
    block15.score();

    fill("grey");
    
    block16.display();

    block16.score();

    fill("skyblue");

    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();

    fill("turquoise");

    block22.display();
    block23.display();
    block24.display();

    block22.score();
    block23.score();
    block24.score();
    
    fill("pink");

    block25.display();

    block25.score();

    image(polygonImg, polygon.position.x, polygon.position.y, 40, 40);

    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode == 32){
        slingshot.attach(this.polygon);
    }
}