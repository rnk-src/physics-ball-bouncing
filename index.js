let canvas = document.getElementById("canvas");

let context = canvas.getContext("2d");

let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

canvas.width = windowWidth;
canvas.height = windowHeight;

canvas.style.background = "#ff8";

class Circle {
    constructor (xPosition, yPosition, radius, color) {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.radius = radius;
        this.color = color;
    }

    draw (context) {
        context.beginPath();
        context.strokeStyle = this.color;
        context.fillStyle = this.color;
        context.arc(this.xPosition, this.yPosition, this.radius, 0, 2 * Math.PI, false);
        context.stroke();
        context.fill();
        context.closePath();
    }
}

let allCircles = [];

for (let numbers = 0; numbers < 10; numbers++) {
    let randomX = Math.random() * windowWidth;
    let randomY = Math.random() * windowHeight;

    allCircles.push(new Circle(randomX, randomY, 50, "red"));
    allCircles[numbers].draw(context);
}
