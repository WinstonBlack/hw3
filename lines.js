// A
var count = 10
while ( count < width ) {
strokeWeight(3);
line( count, 0, count, height);
count = count + 10;
}

// B

var count = 10
while ( count < width ) {
strokeWeight(3);
line( 0, count, width, count);
count = count + 10;
}

//C
var count = 10
while ( count < width ) {
strokeWeight(1);
noFill();
ellipse( width/2, height/2, count, count);
count = count + 10;
}

// D
var count = 10
while ( count < width ) {
  strokeWeight(1);
  noFill();
  line( width/2, 0, count, width);
  count = count + 10;
}
