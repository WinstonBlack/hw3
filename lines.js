// i
var count = 10
while ( count < width ) {
strokeWeight(3);
line( count, 0, count, height);
count = count + 10;
}

// ii

var count = 10
while ( count < width ) {
strokeWeight(3);
line( 0, count, width, count);
count = count + 10;
}

// iii
var count = 10
while ( count < width ) {
strokeWeight(1);
noFill();
ellipse( width/2, height/2, count, count);
count = count + 10;
}

// iv
var count = 10
while ( count < width ) {
  strokeWeight(1);
  noFill();
  line( width/2, 0, count, width);
  count = count + 10;
}

// v

var count = 1

var count = 0
var center  = 170
var spacing = 10
var length = 0

while (count <= 30 ) {
	line( center+length , spacing , center-length , spacing)
	count = count +1
  spacing=spacing+10
  if(count<=15){
  	length=length+10
  }
  else{
    length=length-10
  }
}

// vi

var count = 5
var y = 0

while ( count < width ) {
  line( count, 0, count, y);
  count = count + 5;
  y = y + 10;
}
