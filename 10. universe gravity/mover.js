class Mover {
    constructor(x, y, m) {
        this.pos = createVector(x, y);
        this.vel = p5.Vector.random2D();
        this.vel.mult(5);
        this.acc = createVector(0, 0);
        this.mass = m;
        this.r = sqrt(this.mass) * 2;

        this.angle = 0;
        this.angleA = 0;
        this.angleV = 0.2;
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acc.add(f);
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);

        // this.angleA = this.acc.x / 50;
        // this.angleV += this.angleA;
        // this.angle += this.angleV;

        this.acc.set(0, 0);
    }

    show() {
        stroke(255);
        strokeWeight(2);
        fill(255, 100);
        push();
        translate(this.pos.x, this.pos.y);
        let angle = this.vel.heading();
        rotate(angle);
        // line(0, 0, this.r, 0);
        // ellipse(0, 0, this.r * 2);
        triangle(-this.r, this.r/2, -this.r, -this.r/2, this.r, 0);
        pop();
    }
}