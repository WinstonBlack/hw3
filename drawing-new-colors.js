function setup() {
createCanvas(400, 400);
colorMode(HSB)
}

var diameter = 10;

function draw() {
if (mouseIsPressed) {
  ellipse(mouseX, mouseY, diameter);
}
}

function keyPressed() {
print(key);
if (key == 'P') {
  fill(280, 100, 100);
} else if (key == 'G') {
  fill(80, 80, 100);
} else if (key == 'B') {
  fill(200, 100, 100);
}	else if (key == 'O') {
  fill(30, 100, 100);
} else if (key == 'Z') {
  fill(30, 100, 0);
}	else if (key == 'X') {
  fill(360, 25, 50);
}
  }
