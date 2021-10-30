let particles = [];
let pos_x = 200;
let pos_y = 20;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);

    if(mouseIsPressed) {
        pos_x = mouseX;
        pos_y = mouseY;
    }

    for (let i = 0; i < 3; i++) {
        particles.push(new Particle(pos_x, pos_y));
    }

    for (let particle of particles) {
        let gravity = createVector(0, 0.2);
        particle.applyForce(gravity);
        particle.update();
        particle.show();
    }

    for (let i = particles.length - 1; i >= 0; i--) {
        if (particles[i].finished()) {
            particles.splice(i, 1);
        }
    }
}