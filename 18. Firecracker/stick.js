class Stick {
    constructor(x, y, color) {
        this.startPos = createVector(x, height);
        this.endPos = createVector(x, height);
        this.arrivalPos = createVector(x, y);

        this.color = color;

        this.acc = createVector(0, 0);
        this.vel = createVector(0, 0);

        // 1 -> endPos, 2 -> startPos
        this.mode = 1;
    }

    finished() {
        if(this.endPos.y <= this.arrivalPos.y) {
            // endPos start
            this.mode = 2;
        } else {
            //
            this.mode = 1;
        }

        return this.startPos.y <= this.arrivalPos.y;
    }

    applyForce() {
        let dir;
        if(this.mode === 1) {
            dir = p5.Vector.sub(this.arrivalPos, this.endPos).normalize().setMag(0.35);
        } else if(this.mode === 2) {
            dir = p5.Vector.sub(this.arrivalPos, this.startPos).normalize().setMag(0.35);
        }
        this.acc.add(dir);
    }

    update() {
        this.vel.add(this.acc);
        if(this.mode === 1) {
            this.endPos.add(this.vel);
            this.vel.limit(8);
        } else if(this.mode === 2) {
            this.startPos.add(this.vel);
            this.vel.limit(20);
        }

        this.acc.set(0, 0);
    }

    show() {
        stroke(this.color);
        strokeWeight(2);
        line(this.startPos.x, this.startPos.y, this.endPos.x, this.endPos.y);
        // line(this.startPos.x, this.startPos.y, this.arrivalPos.x, this.arrivalPos.y);
    }
}