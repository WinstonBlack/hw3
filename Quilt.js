 //zelda symbol
  
function yourPatch(x, y) {
  noFill();
  stroke(238);
  rect(x, y, 300, 300);
  colorMode(HSB);
  background(0);

  noStroke();
  fill(45, 100, 100);  
  triangle(x+150, y+100, x+100, y+200, x+200, y+200); // triangle 1

  noStroke();
  fill(45, 100, 0); 
  triangle(x+150, y+200, x+125, y+150, x+175, y+150);// triangle 2
 
}

background(255);
yourPatch(0, 0); // draw patch at upper-left
