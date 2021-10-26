class Attractor {
    constructor(x, y, m) {
        this.pos = createVector(x, y);
        this.mass = m;
        this.r = sqrt(this.mass);
    }

    attract(mover) {
        let force = p5.Vector.sub(this.pos, mover.pos);
        let dirSq = constrain(force.magSq(), 100, 1000);

        let G = 5;

        let strength = G * (this.mass * mover.mass) / dirSq;

        force.setMag(strength);
        mover.applyForce(force);
    }

    show() {
        noStroke();
        fill(255, 0 , 100);
        ellipse(this.pos.x, this.pos.y, this.r * 2);
    }
}