//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup() {
  createCanvas(400,400);
 
  //creating a new engine
  engine = Engine.create();

  //creating the world using the engine
  world = engine.world;

  var ground_options = {
    isStatic:true
  }

  var ball_options = {
    restitution: 0.5
  }

  //create the ground using a rectangular body
  ground = Bodies.rectangle(200,390,400,20,ground_options);

  //adding ground/body to the world
  World.add(world,ground);

  ball = Bodies.circle(200,100,20, ball_options);
  World.add(world,ball);
  console.log(ball);
}

function draw() {
  background(0);
  
  Engine.update(engine);

  //to keep coordinates of the rectangle at the CENTER
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x , ball.position.y, 20, 20);
}