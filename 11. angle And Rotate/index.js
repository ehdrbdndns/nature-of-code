let angle = 0;
let angleV = 0;
let angleA = 0;

function setup() {
    createCanvas(600, 600);
    angleMode(RADIANS);
}

function draw() {
    background(146, 83, 161);

    angleA = map(mouseX, 0, width, -0.02, 0.02);
    angleV = constrain(angleV, -0.2, 0.2)

    noStroke();
    fill(240, 99, 164);
    rectMode(CENTER);
    translate(width/2, height/2);
    rotate(angle);
    rect(0, 0, 128, 64);

    angleV += angleA;
    angle += angleV;
}