class Particle {
    constructor(x, y, r, color) {
        this.pos = createVector(x, y);
        this.r = r;
        this.lifetime = 255;

        this.color = color;
        this.acc = createVector(0, 0);
        this.vel = p5.Vector.random2D();
        this.vel.mult(2)
    }

    finished() {
        return this.lifetime <= 0;
    }

    applyForce(force) {
        this.acc.add(force);
    }

    edge() {
        if(this.pos.y >= height - this.r) {
            this.pos.y = height - this.r;
            this.vel.y *= -1;
        } else if (this.pos.y <= this.r) {
            this.pos.y = this.r;
            this.vel.y *= -1;
        }

        if(this.pos.x >= width - this.r) {
            this.pos.x = width - this.r;
            this.vel.x *= -1;
        } else if (this.pos.x <= this.r) {
            this.pos.x = this.r;
            this.vel.x *= -1;
        }
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0, 0);

        this.lifetime -= 3;
    }

    show() {
        stroke(this.color, this.lifetime);
        strokeWeight(2);
        fill(this.color, this.lifetime);
        circle(this.pos.x, this.pos.y, this.r * 2);
    }
}