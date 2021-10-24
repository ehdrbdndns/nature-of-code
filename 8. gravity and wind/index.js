let moverA;
let moverB;

function setup() {
    createCanvas(400, 400);
    moverA = new Mover(150, 200, 2);
    moverB = new Mover(250, 200, 4);
}

function draw() {
    background(0);


    if(mouseIsPressed) {
        let wind = createVector(0.2, 0);
        moverA.addForce(wind);
        moverB.addForce(wind);
    }

    let gravity = createVector(0, 0.2);
    let weightA = p5.Vector.mult(gravity, moverA.mass);
    let weightB = p5.Vector.mult(gravity, moverB.mass);
    moverA.addForce(weightA);
    moverB.addForce(weightB);

    moverA.edges();
    moverA.update();
    moverA.show();

    moverB.edges();
    moverB.update();
    moverB.show();
}