let movers = [];
let mu = 0.1;
let dragC = 0.3;

function setup() {
    createCanvas(400, 400);
    for(let i = 0; i < 10; i++) {
        movers[i] = new Mover(random(width), 0, random(1, 8));
    }
}

function draw() {
    background(0);

    fill(255, 125);
    noStroke();
    rect(0, height/2, width, height/2)

    for(let mover of movers) {
        if (mouseIsPressed) {
            let wind = createVector(0.8, 0);
            mover.addForce(wind);
        }

        let gravity = createVector(0, 0.2);
        let weight = p5.Vector.mult(gravity, mover.mass);

        if(mover.pos.y >= height/2) {
            mover.drag(dragC);
        }
        mover.addForce(weight);
        mover.update();
        mover.edges();
        mover.show();
    }
}