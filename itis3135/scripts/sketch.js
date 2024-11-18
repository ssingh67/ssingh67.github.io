let shapes = []; 
let isAnimating = false; 


class Shape {
    constructor(type, x, y, size, color) {
        this.type = type; 
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.speedX = random(-2, 2); 
        this.speedY = random(-2, 2); 
    }
   
    display() {
        fill(this.color);
        noStroke();
        if (this.type === 0) {
            ellipse(this.x, this.y, this.size); 
        } else if (this.type === 1) {
            rect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
        } else if (this.type === 2) {
            triangle(
                this.x, this.y - this.size / 2,
                this.x - this.size / 2, this.y + this.size / 2,
                this.x + this.size / 2, this.y + this.size / 2
            ); 
        }
    }
   
    move() {
        this.x += this.speedX; 
        this.y += this.speedY;
        
        if (this.x < 0 || this.x > width) this.speedX *= -1;
        if (this.y < 0 || this.y > height) this.speedY *= -1;
    }
}


function generateShapes(name) {
    shapes = []; 
    const colors = ["red", "blue", "green", "orange", "purple", "yellow"];
    for (let i = 0; i < name.length; i++) {
        const type = i % 3; 
        const color = colors[i % colors.length]; 
        const size = random(30, 100); 
        const x = random(width); 
        const y = random(height); 
        shapes.push(new Shape(type, x, y, size, color));
    }
    console.log(`Generated ${shapes.length} shapes for the name "${name}"`);
}

function setup() {
    
    const canvas = createCanvas(800, 400);
    canvas.parent("canvas-container");
    background(240); 
    noLoop(); 
}

function draw() {
    background(240); 
   
    if (isAnimating && shapes.length > 0) {
        for (let shape of shapes) {
            shape.display(); 
            shape.move(); 
        }
    }
}


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("animate-button").addEventListener("click", () => {
        const input = document.getElementById("name-input").value.trim();
        if (!input) {
            alert("Please enter a name!");
            return;
        }
        console.log(`User entered name: ${input}`);
        generateShapes(input); 
        isAnimating = true; 
        loop(); 
    });
});
