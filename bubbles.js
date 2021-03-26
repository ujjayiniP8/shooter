//variables
  var bb;
  var bbVel;
	var bbSize;

//obstacles
function updateBubbles()
{
  touch = false;

  //loop
  for(var i = 0;i < bb.length;i++)
  {
  push();
  
  //bubble collision
  if(dist(bb[i].x,bb[i].y,p.x,p.y) <bbSize/2 )
  {
  touch = true;
  console.log(touch);
  }

  //location of obstacles
  bb[i].add(bbVel[i]);
 
  //player in contain
  if(bb[i].x > width+bbSize/2)
  {
    bb[i].x = 0
  }

  if(bb[i].x < -bbSize/2)
  {
    bb[i].x = 400
  }

  if(bb[i].y > height+bbSize/2)
  {
    bb[i].y = 0
  }

  if(bb[i].y < -bbSize/2)
  {
   bb[i].y = 400 
  }
  
  //making the obstacles
  fill(132,112,255,45)
  stroke(255);
  ellipse(bb[i].x,bb[i].y,bbSize);
  pop();
}
  if(touch == true)
  {
  playerColor= color(255,0,0);
    Health --;
  }
  else
  {
  playerColor = color(255);
  }

}
