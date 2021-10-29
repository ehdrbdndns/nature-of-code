let particles = [];
let springs = [];

let k = 0.01;
let spacing = 50;

let gravity;

function setup() {
    createCanvas(400, 800);
    for(let i = 0; i < 5; i++) {
        particles[i] = new Particle( 200, i * spacing);
        if(i !== 0) {
            let a = particles[i];
            let b = particles[i - 1];
            let spring = new Spring(k, spacing, a, b);
            springs.push(spring);
        }
    }
    particles[0].locked = true;

    gravity = createVector(0, 0.1);
}

function draw() {
    background(112, 50, 126);

    for(s of springs) {
        s.update();
        s.show();
    }

    for(p of particles) {
        p.applyForce(gravity);
        p.update();
        // p.show();
    }

    let tail = particles[particles.length - 1];

    if(mouseIsPressed) {
        tail.position.set(mouseX, mouseY);
        tail.velocity.set(0, 0);
    }
}