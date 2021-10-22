class Walker {
    constructor(x, y) {
        this.pos = createVector(x, y);
        // this.vel = createVector(1, -1);
    }

    update() {
        this.vel = createVector(floor(random(-1, 1)), floor(random(-1, 1)));
        this.pos.add(this.vel);
    }

    show() {
        stroke(255);
        strokeWeight(2);
        fill(255, 100);
        ellipse(this.pos.x, this.pos.y, 32);
    }
}