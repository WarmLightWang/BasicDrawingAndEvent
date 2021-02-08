/* jshint -W069, esversion:6 */

/**
 * This program will implement the following behaviors: When the user clicks the mouse in the rectangle, a circle 
 * starts at the bottom edge of the screen and travels to the mouse position. When the circle gets to the position
 * of the click, it changes to a bunch of small squares that start moving outward from that position. They move 
 * until they get to the edge of the screen (or they can “fade out”) after a while.
 */
window.onload = function () {

    // Getting the canvas
    /** @type {HTMLCanvasElement} */
    let canvas = (/** @type {HTMLCanvasElement} */ document.getElementById("box2canvas"));
    let context = canvas.getContext('2d');

    // keep a list of squares, each with a position (x,y), a size (radius)
    // and a velocity (vx,vy)
    let boxfcircles = [];
    let boxfsqrs = [];

    // we want to know where the mouse is, but we only find out on movement events!
    // so we'll keep some state
    let mouseXf = -10;
    let mouseYf = -10;
    let mouseDf = 0;

    // when the mouse moves in the canvas, remember where it moves to
    canvas.onmousedown = function (event) {
        mouseXf = event.clientX;
        mouseYf = event.clientY;

        // unfortunately, X,Y is relative to the overall window -
        // we need the X,Y inside the canvas!
        // we know that event.target is a HTMLCanvasElement, so tell typescript
        let box = /** @type {HTMLCanvasElement} */(event.target).getBoundingClientRect();
        mouseXf -= box.left;
        mouseYf -= box.top;

        if ((mouseXf > 0) && (mouseYf > 0)) {
            let vx = 0;
            let vy = -7;
            boxfcircles.push({
                "x": mouseXf, "y": canvas.height, "s": 10,
                "vx": vx, "vy": vy, "cx": mouseXf, "cy": mouseYf,
                "color": "red"
            });
        }
    };

    function box3fanimate() {
        // clear the canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // move all the circles
        boxfcircles.forEach(function (circle) {
            circle.y += circle.vy;
            circle.x += circle.vx;
            if (circle.y < circle.cy) {
                circle.y = circle.cy;
                for (let i = 0; i < 100; i++) {
                    let vx = (Math.random() - 0.5) * 15;
                    let vy = (Math.random() - 0.5) * 15;
                    boxfsqrs.push({ "x": circle.x, "y": circle.y, "s": 5, "vx": vx, "vy": vy, "color": "green" });
                }
                circle.y = -1;
            }
        });

        boxfsqrs.forEach(function (circle) {
            circle.y += circle.vy;
            circle.x += circle.vx;
        });

        // remove circles that have gone off the screen
        boxfcircles = boxfcircles.filter(

            // this defines a function using "arrow notation"
            circle => ((circle.y > 0) && (circle.x > 0) && (circle.x < canvas.width) && (circle.y < canvas.height))
        );

        boxfsqrs = boxfsqrs.filter(
            // this defines a function using "arrow notation"
            circle => ((circle.y > 0) && (circle.x > 0) && (circle.x < canvas.width) && (circle.y < canvas.height))
        );

        // draw all of the circles
        boxfcircles.forEach(function (circle) {
            context.fillStyle = circle.color;
            context.beginPath();
            context.arc(circle.x, circle.y, circle.s, 0, Math.PI * 2, true);
            context.fill();
        });

        // Draw the colorful squares 
        boxfsqrs.forEach(function (sqrs) {
            let red = Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);
            let blue = Math.floor(Math.random() * 255);
            context.fillStyle = "rgb(" + red + "," + green + "," + blue + " )";
            context.fillRect(sqrs.x, sqrs.y, sqrs.s, sqrs.s);
        });
        window.requestAnimationFrame(box3fanimate);
    }
    box3fanimate();
};
