let pos;
let prev;

function setup() {
    createCanvas(400, 400);
    pos = createVector(200, 200);
    prev = pos.copy();
    background(51);
}

function draw() {
    stroke(255, 100);
    strokeWeight(2);
    line(pos.x, pos.y, prev.x, prev.y);
    prev.set(pos);

    let step = p5.Vector.random2D();
    let r = random(100);

    if(r < 1) {
        step.mult(random(25, 100));
    } else {
        step.setMag(2);
    }

    pos.add(step);
}