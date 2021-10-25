class Mover {
    constructor(x, y, w, h, m) {
        this.pos = createVector(x, y);
        this.width = w;
        this.height = h;
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.mass = m;
    }

    drag(c) {
        //Direction of Drag
        let drag = this.vel.copy();
        drag.normalize();
        drag.mult(-1);

        let speedSq = this.vel.magSq();
        c *= map(this.width, 10, 80, 1, 3);
        drag.setMag(c * speedSq);

        this.addForce(drag);
    }

    addForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acc.add(f);
    }

    edges() {
        if (this.pos.y > height - this.height) {
            this.pos.y = height - this.height;
            this.vel.y *= -1;
        }

        if (this.pos.x > width - this.width) {
            this.pos.x = width - this.width;
            this.vel.x *= -1;
        } else if (this.pos.x < 0) {
            this.pos.x = this.width;
            this.vel.x *= -1;
        }
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0, 0);
    }

    show() {
        // draw ball
        stroke(255);
        strokeWeight(2);
        fill(255, 100);
        rect(this.pos.x, this.pos.y, this.width, this.height);
    }
}