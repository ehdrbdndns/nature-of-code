let r = 100;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0, 10);
    stroke(255);
    strokeWeight(4);
    noFill();
    translate(200, 200);

    let increment = map(mouseX, 0, width, PI, 0.01);

    beginShape();
    for(let a = 0; a < TWO_PI; a += increment) {
        let x = r * cos(a);
        let y = r * sin(a);
        vertex(x, y);
    }
    endShape(CLOSE);
}