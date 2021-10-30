let firecrackers = [];
let sticks = [];
let gravity;

let prevClick = false;

function setup() {
    createCanvas(400, 400);
    gravity = createVector(0, 0.2);
}

function draw() {
    background(0);

    if (mouseIsPressed) {
        if (!prevClick) {
            let stickColor = color(random(0, 255), random(0, 255), random(0, 255));
            let stick = new Stick(mouseX, mouseY, stickColor);

            sticks.push(stick);

            prevClick = true;
        }
    } else {
        prevClick = false;
    }

    for(let i = 0; i < sticks.length; i++) {
        let stick = sticks[i];
        stick.applyForce();
        stick.update();
        if(stick.finished()) {
            sticks.splice(i, 1);
            let particles = [];
            for (let i = 0; i < 100; i++) {
                particles.push(new Particle(stick.arrivalPos.x, stick.arrivalPos.y, random(1, 4), stick.color));
            }
            firecrackers.push(particles);
        }
        stick.show();
    }

    for (let i = 0; i < firecrackers.length; i++) {
        let firecracker = firecrackers[i];

        for (let j = 0; j < firecracker.length; j++) {
            let particle = firecracker[j];
            particle.update();
            // particle.edge();
            particle.show();

            if (particle.finished()) {
                firecracker.splice(j, 1);
            }
        }
    }

    for(let i = 0; i < firecrackers.length; i++) {
        if(firecrackers[i].length === 0) {
            firecrackers.splice(i, 1);
        }
    }
}