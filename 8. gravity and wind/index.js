let mover;

function setup() {
    createCanvas(400, 400);
    mover = new Mover(200, 200);
}

function draw() {
    background(0);


    if(mouseIsPressed) {
        let wind = createVector(0.2, 0);
        mover.addForce(wind);
    }

    let gravity = createVector(0, 0.2);
    mover.addForce(gravity);

    mover.edges();
    mover.update();
    mover.show();
}