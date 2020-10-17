const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var bob1;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    bob1 = new Bob(200, 100, 45);
    rope1 = new Rope(450, 200, 40, 40);


}

function draw(){
   	background(0);

    Engine.update(engine);
     ground.display();
     bob1.display();
     rope.display();
}
