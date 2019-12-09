// Global variables
let bubbles;
let pushBubblesBtn;
let addBubbleBtn;
let resetBtn;

function setup() {
    // Setup for the sketch
    createCanvas(600, 600);
    bubbles = [];
    pushBubblesBtn = createButton('Bounce!!!');
    pushBubblesBtn.position(10, 10);
    pushBubblesBtn.mousePressed(applyForce);
    addBubbleBtn = createButton('Add bubble!!!');
    addBubbleBtn.position(100, 10);
    addBubbleBtn.mousePressed(addBubble);
    resetBtn = createButton('Reset');
    resetBtn.position(200, 10);
    resetBtn.mousePressed(reset);
}

function draw() {
    // Draws the sketch 60 times a second
    background(0);
    for (let i = 0; i < bubbles.length; i++) {
        // Detecting collisions
        for (let j = i + 1; j < bubbles.length; j++) {
            if (bubbles[i].collisionDetection(bubbles[j])) {
                bubbles[i].collisionResolve(bubbles[j]);
            }
        }
        bubbles[i].update();
        bubbles[i].show();
    }
}

function applyForce() {
    for (let bubble of bubbles) {
        bubble.applyForce(createVector(random(-5, 5), random(-5, 5)))
    }
}

function addBubble() {
    let newBubble = null;
    do {
        newBubble = new Bubble(
            createVector(random(width), random(height)),
            random(10, 50),
            color(int(random(255)), int(random(255)), int(random(255)))
        );
        for (let i = 0; i < bubbles.length; i++) {
            if (newBubble.collisionDetection(bubbles[i])) {
                newBubble = null;
                break;
            }
        }
    } while (!newBubble);
    bubbles.push(newBubble);
}

function reset() {
    bubbles = []
}

