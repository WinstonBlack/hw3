//Triforce symbol
  
function Triforce(x, y) {
  noFill();
  stroke(238);
  rect(x, y, 100, 100);
  colorMode(HSB);


  noStroke();
  fill(45, 100, 100);  
  triangle(x+50, y+0, x+0, y+75, x+100, y+75); // triangle 1

  noStroke();
  fill(45, 0, 100); 
  triangle(x+50, y+75, x+25, y+37.5, x+75, y+37.5);// triangle 2
 

}

background(255);
Triforce(0,0 ); // draw patch at upper-left
