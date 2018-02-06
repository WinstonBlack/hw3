function draw (){
var count = 10
while ( count < width ) {
  strokeWeight(1);
  noFill();
  line( width/2, 0, mouseX,mouseY);
  count = count + 10;
}
}
