class Mover {
    constructor(x, y, m) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.mass = m;
        this.r = sqrt(this.mass) * 10;

        this.gravityForce = createVector(0, 0);
        this.velocityForce = createVector(0, 0);
        this.frictionForce = createVector(0, 0);
        this.gravityColor = color(255, 192, 203)
        this.velocityColor = color(255, 203, 0);
        this.frictionColor = color(74, 168, 216);
    }

    friction(mu) {
        let diff = height - (this.pos.y + this.r);
        if(diff < 1)  {

            //Direction of Friction
            let friction = this.vel.copy();
            friction.normalize();
            friction.mult(-1);

            //Magnitude Of Friction
            //let mu = 0.1; // surface의 종류에 따른 값 ex) ice, road
            let normal = this.mass;
            friction.setMag(mu * normal);

            this.addForce(friction, "friction");
        }
    }

    addForce(force, type) {
        let f = p5.Vector.div(force, this.mass);
        this.acc.add(f);
        this.setArrow(f, type);
    }

    edges() {
        if(this.pos.y > height - this.r) {
            this.pos.y = height - this.r;
            this.vel.y *= -1;
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
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0, 0);
    }

    setArrow(force, type) {
        // draw force arrow
        if(type === "gravity") {
            this.gravityForce = force.copy().setMag(this.r * 2);
        } else if(type === "friction") {
            this.frictionForce = force.copy().mult(300)
        }

        this.velocityForce = this.vel.copy().mult(this.r / 2);
        this.startPos = this.pos;
    }

    drawArrow(endPos, color) {
        let startPos = this.startPos;
        // draw line
        stroke(color)
        line(startPos.x, startPos.y, endPos.x, endPos.y);

        // draw angle
        push()
        translate(endPos.x, endPos.y);
        let angle = atan2(endPos.y - startPos.y, endPos.x - startPos.x);
        rotate(angle);
        fill(color)
        triangle(0, -2, 2, 0, 0, 2);
        pop();
    }

    show() {
        // draw ball
        stroke(255);
        strokeWeight(2);
        fill(255, 100);
        ellipse(this.pos.x, this.pos.y, this.r * 2);

        // draw velocity arrow
        this.drawArrow(this.pos.copy().add(this.velocityForce), this.velocityColor);

        // draw gravity arrow
        this.drawArrow(this.pos.copy().add(this.gravityForce), this.gravityColor);

        // draw friction arrow
        this.drawArrow(this.pos.copy().add(this.frictionForce), this.frictionColor);
    }
}