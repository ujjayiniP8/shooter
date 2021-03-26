var bgImg;

function preload() {
 laserSound = loadSound('laser.ogg');
  deathSound= loadSound('death.ogg');
 
}
 
function setup() {
  //canvas
  createCanvas(400, 400);

  //vector
  p=createVector(width/2,height/2)
  pVel=createVector(0,0);
  force=createVector(0,0);

  //size
  size = 10;
  
  //heading
  heading = 0;

  //color
  boostColor = color(0, 255, 0);
  playerColor = color(255);

  //score
  Score  =  0;

  //life
  Health = 200;

  bb = [];
  bbVel = [];
  bbSize = 25;
  
  //loop
  for(var i = 0;i < 5;i++){
    bb.push(createVector( random ( 0,width ) ,random ( 0,height ) ) );
  bbVel.push( p5.Vector.random2D().mult(random(0.25,2.25)));
}
}
//draw
function draw() {
  //background
  background(0);
  
  //updates
  updatePlayer();
  updateBubbles();
  updateLasers();

}


