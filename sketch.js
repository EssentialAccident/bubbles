// Global variables
let bubble;
let push;

function setup() {
    // Setup for the sketch
    createCanvas(600, 600);
    bubble = new Bubble(
        createVector(random(width), random(height)),
        random(10, 50),
        color(int(random(255)), int(random(255)), int(random(255))
        ));
    push = createButton('Bounce!!!');
    push.position(20, 610);
    push.mousePressed(applyForce);
}

function draw() {
    // Draws the sketch 60 times a second
    background(0);
    bubble.update();
    bubble.show();
}

function applyForce() {
    bubble.applyForce(createVector(random(-5, 5), random(-5, 5)))
}
