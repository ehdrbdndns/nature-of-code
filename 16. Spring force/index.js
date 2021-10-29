let bob;
let anchor;
let restLength = 200;
let k = 0.01;
let velocity;
let gravity;

function setup() {
    createCanvas(600, 400);
    bob = createVector(350, 250);
    anchor = createVector(300, 0);
    velocity = createVector(0, 0);
    gravity = createVector(0, 0.5);
}

function draw() {
    background(112, 50, 126);
    noStroke();
    stroke(255);
    strokeWeight(4);
    line(anchor.x, anchor.y, bob.x, bob.y);
    fill(45, 197, 244);
    circle(anchor.x, anchor.y, 32);
    circle(bob.x, bob.y, 64);

    if(mouseIsPressed) {
        bob.x = mouseX;
        bob.y = mouseY;
        velocity.set(0, 0);
    }

    let force = p5.Vector.sub(bob, anchor);
    let x = force.mag() - restLength;
    force.normalize();
    force.mult(-1 * k * x);

    velocity.add(force);
    velocity.add(gravity);
    bob.add(velocity);
    velocity.mult(0.99);
}