class Bubble {

    RADIUS = 30;
    MAX_SPEED = 5;

    constructor(position) {
        let setUpVector = createVector(0, 0);
        this.pos = position;
        this.vel = setUpVector;
        this.acc = setUpVector;
    }

    update() {
        // Physics of applying force
        this.vel.add(this.acc);
        if (this.vel.mag() > this.MAX_SPEED) {
            this.vel.setMag(this.MAX_SPEED);
        }
        this.pos.add(this.vel);
        this.acc = createVector(0);
       
        // Bouncing against borders of the screen
        if (this.pos.x < this.RADIUS || this.pos.x > width - this.RADIUS) {
            this.vel.x = -(this.vel.x);
        }
        if (this.pos.y < this.RADIUS || this.pos.y > height - this.RADIUS) {
            this.vel.y = -(this.vel.y);
        }

    }

    show() {
        noFill();
        stroke(255);
        circle(this.pos.x, this.pos.y, this.RADIUS * 2);
    }

    applyForce(force) {
        this.acc.add(force)
    }
}