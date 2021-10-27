class Wave {
    constructor(amp, period, phase) {
        this.amplitude = amp;
        this.period = period;
        this.phase = phase;
    }

    evaluate(x) {
        return sin(this.phase + TWO_PI * (x / this.period)) * this.amplitude;
    }

    update() {
        this.phase += 0.05;
    }
}


let waves = [];
function setup() {
    createCanvas(600, 400);
    for(let i = 0; i < 5; i++) {
        waves[i] = new Wave(random(20, 80), random(100, 200), 0);
    }
}

function draw() {
    background(0);
    stroke(255);
    strokeWeight(2);
    for(let x = 0; x < width; x++) {
        let y = 0;
        for(let wave of waves) {
            y += wave.evaluate(x);
        }
        point(x, y + height/2);
    }

    for(let wave of waves) {
        wave.update();
    }
}