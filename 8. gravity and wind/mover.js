class Mover {
    constructor(x, y, m) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.mass = m;
        this.r = sqrt(this.mass) * 10;
    }

    addForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acc.add(f);
    }

    edges() {
        if(this.pos.y > height - this.r) {
            this.pos.y = height - this.r;
            this.vel.y *= -0.999999;
        }

        if(this.pos.x > width - this.r) {
            this.pos.x = width - this.r;
            this.vel.x *= -1;
        } else if(this.pos.x < 0) {
            this.pos.x = this.r;
            this.vel.x *= -1;
        }
    }

    update() {
        // let mouse = createVector(mouseX, mouseY);
        // this.acc = p5.Vector.sub(mouse, this.pos);
        // this.acc.setMag(1);
        // this.vel.limit(5);
        // print(this.vel)
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0, 0);
    }

    show() {
        stroke(255);
        strokeWeight(2);
        fill(255, 100);
        ellipse(this.pos.x, this.pos.y, this.r * 2);
    }
}