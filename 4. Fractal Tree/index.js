let angle;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(71);
    translate(200, height);
    stroke(255);
    angle = PI / 5;
    branch(100);
}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 4) {
        push();
        rotate(angle);
        branch(len * 0.67);
        pop();
        push();
        rotate(-angle);
        branch(len * 0.67);
        pop();
    }
    // line(0, 0, 0, -len * 0.67);
}