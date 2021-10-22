let walker;

function setup() {
    createCanvas(400, 400);
    background(0);
    walker = new Walker(200, 200);
}

function draw() {
    walker.update();
    walker.show();
}