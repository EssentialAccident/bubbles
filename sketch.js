// Global variables
let bubble;
let button;

function setup() {
    // Setup for the sketch
    createCanvas(600, 600);
    bubble = new Bubble(createVector(random(width), random(height)));
    button = createButton('click me');
    button.position(19, 19);
    button.mousePressed(applyForce);
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
