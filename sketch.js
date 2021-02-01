const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var d1, d2, d3, d4, d5, d6;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,795,480,10)

  for (var k = 0; k <=width; k = k+80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  
  for(var j = 75; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }

  for(var j = 50; j <=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,175));
  }

  for(var j = 75; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,275));
  }

  for (var j = 50; j <=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,375));
  }

  //d1 = new Divisions(100,690,7,200)
  //d2 = new Divisions(180,690,7,200)
  //d3 = new Divisions(260,690,7,200)
  //d4 = new Divisions(340,690,7,200)
  //d5 = new Divisions(420,690,7,200)
  //d6 = new Divisions(500,690,7,200)

}



function draw() {
  background("oldlace");  

  Engine.update(engine);

  ground.display();

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
  }

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display(); 
  }
  

  //d1.display();
  //d2.display();
  //d3.display();
  //d4.display();
  //d5.display();
  //d6.display();



}

