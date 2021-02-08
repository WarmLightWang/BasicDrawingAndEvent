/* jshint -W069, esversion:6 */

/**
 * Drawing four smile faces with different depths of color
 */

window.onload = function () {

    // Getting the canvas
    let canvas = document.getElementById("canvas1");
    let context = canvas.getContext("2d");
  
    // draw a rectangle backgroud
    context.fillStyle = "lightblue";
    context.fillRect(0, 0, 500, 500);

    // Draw the first smile face
    context.fillStyle = "rgba(255, 0, 255, 0.2)";
    context.strokeStyle = "black";
    context.beginPath();
    context.arc(75, 75, 50, 0, Math.PI * 2, true); // Draw the outer circle
    context.moveTo(110, 75);
    context.arc(75, 75, 35, 0, Math.PI, false);  // Draw the clockwise mouth
    context.moveTo(65, 65);
    context.arc(60, 65, 5, 0, Math.PI * 2, true);  // Draw the left eye
    context.moveTo(95, 65);
    context.arc(90, 65, 5, 0, Math.PI * 2, true);  // Draw the right eye
    context.lineWidth = 1;
    context.fill();
    context.stroke();

    // Draw the second smile face
    context.fillStyle = "rgba(255, 0, 255, 0.4)";
    context.strokeStyle = "black";
    context.beginPath();
    context.arc(155, 155, 50, 0, Math.PI * 2, true); 
    context.moveTo(190, 155);
    context.arc(155, 155, 35, 0, Math.PI, false);  
    context.moveTo(145, 145);
    context.arc(140, 145, 5, 0, Math.PI * 2, true);  
    context.moveTo(175, 145);
    context.arc(170, 145, 5, 0, Math.PI * 2, true);  
    context.lineWidth = 1;
    context.fill();
    context.stroke();

    // Draw the third smile face
    context.fillStyle = "rgba(255, 0, 255, 0.6)";
    context.strokeStyle = "black";
    context.beginPath();
    context.arc(235, 235, 50, 0, Math.PI * 2, true); 
    context.moveTo(270, 235);
    context.arc(235, 235, 35, 0, Math.PI, false);  
    context.moveTo(225, 225);
    context.arc(220, 225, 5, 0, Math.PI * 2, true);  
    context.moveTo(255, 225);
    context.arc(250, 225, 5, 0, Math.PI * 2, true);  
    context.lineWidth = 1;
    context.fill();
    context.stroke();

    // Draw the third smile face
    context.fillStyle = "rgba(255, 0, 255, 0.9)";
    context.strokeStyle = "black";
    context.beginPath();
    context.arc(315, 315, 50, 0, Math.PI * 2, true); 
    context.moveTo(350, 315);
    context.arc(315, 315, 35, 0, Math.PI, false);  
    context.moveTo(305, 305);
    context.arc(300, 305, 5, 0, Math.PI * 2, true);  
    context.moveTo(335, 305);
    context.arc(330, 305, 5, 0, Math.PI * 2, true);  
    context.lineWidth = 1;
    context.fill();
    context.stroke();

};