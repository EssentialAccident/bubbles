class Bubble {

    MAX_SPEED = 7;

    constructor(position, radius = 30, col = color(255)) {
        let setUpVector = createVector(0, 0);
        this.pos = position;
        this.vel = setUpVector;
        this.acc = setUpVector;
        this.radius = radius;
        this.color = col;
        this.checkBorders();
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
        this.checkBorders();
    }

    show() {
        noFill();
        strokeWeight(3);
        stroke(this.color);
        circle(this.pos.x, this.pos.y, this.radius * 2);
    }

    applyForce(force) {
        this.acc.add(force)
    }

    checkBorders() {
        if (this.pos.x < this.radius) {
            this.pos.x = this.radius;
            this.vel.x = -(this.vel.x);
        } else if (this.pos.x > width - this.radius) {
            this.pos.x = width - this.radius;
            this.vel.x = -(this.vel.x);
        }
        if (this.pos.y < this.radius) {
            this.pos.y = this.radius;
            this.vel.y = -(this.vel.y);
        } else if (this.pos.y > height - this.radius) {
            this.pos.y = height - this.radius;
            this.vel.y = -(this.vel.y);
        }
    }

}