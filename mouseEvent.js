/* jshint -W069, esversion:6 */

/**
 * This program will implement the following behavior: When the user clicks in the element, a circle appears under 
 * the mouse. Circles get added, so the user can make lots of circles.If a circle is under the mouse, it changes color. 
 * The circle changes color back to its original color when the mouse leaves.
 */
window.onload = function () {

    // Getting the canvas
    /** @type {HTMLCanvasElement} */
    let canvas = (/** @type {HTMLCanvasElement} */ document.getElementById("box1canvas"));
    let context = canvas.getContext('2d');

    // keep a list of circles, each with a position (x,y), a size (radius)
    // and a velocity (vx,vy)
    let boxfcircles = [];

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
            let vx = (Math.random() - 0.5) * 5;
            let vy = (Math.random() - 0.5) * 5;
            boxfcircles.push({ "x": mouseXf, "y": mouseYf, "s": 15, "color": "green" });
        }
        box3fanimate();
    };

    canvas.onmousemove = function (event) {
        mouseXf = event.clientX;
        mouseYf = event.clientY;
        // unfortunately, X,Y is relative to the overall window -
        // we need the X,Y inside the canvas!
        // we know that event.target is a HTMLCanvasElement, so tell typescript
        let box = /** @type {HTMLCanvasElement} */(event.target).getBoundingClientRect();
        mouseXf -= box.left;
        mouseYf -= box.top;

        boxfcircles.forEach(function (circle) {
            // see if xy is inside of circle
            if (Math.pow(mouseXf - circle.x, 2) + Math.pow(mouseYf - circle.y, 2) <= Math.pow(circle.s, 2)) {
                circle.color = "yellow";
            }
            else {
                circle.color = "green";
            }
        });
        box3fanimate();
    };

    function box3fanimate() {
        // clear the canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // draw all of the circles
        boxfcircles.forEach(function (circle) {
            context.fillStyle = circle.color;
            context.beginPath();
            context.arc(circle.x, circle.y, circle.s, 0, Math.PI * 2, true);
            context.fill();
        });
    }
};
