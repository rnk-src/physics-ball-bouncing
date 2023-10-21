let canvas = document.getElementById("canvas");

let context = canvas.getContext("2d");

let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

canvas.width = windowWidth;
canvas.height = windowHeight;

canvas.style.background = "#000000";

class Circle {
    constructor (xPosition, yPosition, radius, color, speed) {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.radius = radius;
        this.color = color;
        this.speed = speed;

        this.dx = 1 * speed;
        this.dy = 1 * speed;
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

    update () {
        context.clearRect(0, 0, windowWidth, windowHeight);

        this.draw(context);

        let sides = {leftMost: this.xPosition - this.radius, rightMost: this.xPosition + this.radius,
            bottomMost: this.yPosition + this.radius, topMost: this.yPosition - this.radius};

        if (sides.rightMost >= windowWidth || sides.leftMost < 0) {
            this.dx = -this.dx * 0.9;
            if (sides.rightMost >= windowWidth) {
                this.xPosition = windowWidth - this.radius;
            } else {
                this.xPosition = this.radius;
            }
        }
        if (sides.bottomMost >= windowHeight || sides.topMost < 0) {
            this.dy = -this.dy * 0.9;
            if (sides.bottomMost >= windowHeight) {
                this.yPosition = windowHeight - this.radius;
            } else {
                this.yPosition = this.radius;
            }
        }

        this.dy += 0.2

        this.xPosition += this.dx;
        this.yPosition += this.dy;
    }
}

// let allCircles = [];
//
// for (let numbers = 0; numbers < 10; numbers++) {
//     let randomX = Math.random() * windowWidth;
//     let randomY = Math.random() * windowHeight;
//
//     allCircles.push(new Circle(randomX, randomY, 50, "red"));
//     allCircles[numbers].draw(context);
// }

let ball = new Circle(100, 100, 50, "red", 30);

ball.draw(context);

let updateCircle = function () {
    requestAnimationFrame(updateCircle);
    ball.update();
}

updateCircle();