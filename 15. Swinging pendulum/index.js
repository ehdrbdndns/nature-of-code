let angle;
let angleA = 0;
let angleV = 0;

let bob;
let len;
let origin;

let gravity = 1;

function setup() {
    createCanvas(600, 800);
    origin = createVector(300, 0);
    angle = PI / 4;
    bob = createVector();
    len = 600;
}

function draw() {
    background(0);

    let force = sin(angle) * gravity / len;
    angleA = -1 * force;

    angleV += angleA;
    angle += angleV;

    bob.x = len * sin(angle) + origin.x;
    bob.y = len * cos(angle) + origin.y;

    stroke(255);
    strokeWeight(8);
    fill(127);
    line(origin.x, origin.y, bob.x, bob.y);
    circle(bob.x, bob.y, 64);
}