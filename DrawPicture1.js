/* jshint -W069, esversion:6 */

/**
 * Drawing four shapes
 */

window.onload = function() {
    // you should start by getting the canvas
    let canvas = document.getElementById("canvas1");
    let context = canvas.getContext("2d");

    // Drawing for circle
    context.fillStyle = "#F8E";
    context.strokeStyle = "#846";
    context.beginPath();
    context.arc(50, 50, 25, 0, 2 * Math.PI);
    context.lineWidth = 5;
    context.fill();
    context.stroke();

    // Drawing for triangle
    context.fillStyle = "sandybrown";
    context.strokeStyle = "darkgoldenrod";
    context.beginPath();
    context.moveTo(25, 150);
    context.lineTo(75, 150);
    context.lineTo(50, 110);
    context.closePath();
    context.lineWidth = 5;
    context.fill();
    context.stroke();

    // Drawing for oval
    context.fillStyle = "lightpink";
    context.strokeStyle = "darkred";
    context.beginPath();
    context.moveTo(125, 25);
    context.lineTo(175, 25);
    context.arc(175, 50, 25, 1.5 * Math.PI, 0.5*Math.PI);
    context.lineTo(175, 75);
    context.lineTo(125, 75);
    context.arc(125, 50, 25, 0.5 * Math.PI, 1.5*Math.PI);
    context.closePath();
    context.lineWidth = 5;
    context.fill();
    context.stroke();
    
    // Drawing for polygon
    context.fillStyle = "gray";
    context.strokeStyle = "black";
    context.beginPath();
    context.moveTo(100, 150);
    context.lineTo(200, 150);
    context.lineTo(200, 125);
    context.lineTo(175, 100);
    context.lineTo(150, 125);
    context.lineTo(125, 100);
    context.lineTo(100, 125);
    context.closePath();
    context.lineWidth = 5;
    context.fill();
    context.stroke();
};