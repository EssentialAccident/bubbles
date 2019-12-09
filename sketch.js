// Global variables
let bubbles;
let pushBubblesBtn;
let addBubbleBtn;

function setup() {
    // Setup for the sketch
    createCanvas(600, 600);
    bubbles = [];
    pushBubblesBtn = createButton('Bounce!!!');
    pushBubblesBtn.position(10, 10);
    pushBubblesBtn.mousePressed(applyForce);
    addBubbleBtn = createButton('Add bubble!!!');
    addBubbleBtn.position(100, 10);
    addBubbleBtn.mousePressed(addBubble)
}

function draw() {
    // Draws the sketch 60 times a second
    background(0);
    for (let bubble of bubbles) {
        bubble.update();
        bubble.show();
    }

}

function applyForce() {
    for (let bubble of bubbles) {
        bubble.applyForce(createVector(random(-5, 5), random(-5, 5)))
    }
}

function addBubble() {
    bubbles.push(new Bubble(
        createVector(random(width), random(height)),
        random(10, 50),
        color(int(random(255)), int(random(255)), int(random(255))
        )));
}
