// Menyiapkan canvas
const mycanvas = document.querySelector('#mycanvas');

// Ukuran canvas

mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;

// Tentukan context

const c = mycanvas.getContext('2d');

// Manipulasi canvas

// // Rectangle
// c.fillStyle = 'pink';
// c.strokeStyle = '#999';
// c.lineWidth = '5';

// c.rect(50, 50, 300, 300);
// c.fill();
// c.stroke();

// // Membuat lingkaran 
// c.fillStyle = 'lightgreen';
// c.beginPath();
// c.arc(550, 200, 150, 0, 2 * Math.PI);
// c.fill();
// c.stroke();

// // Membuat Path (segitiga)
// c.fillStyle = 'lightblue';
// c.beginPath();
// c.moveTo(900, 50);
// c.lineTo(1050, 350);
// c.lineTo(750, 350);
// c.closePath();
// c.fill();
// c.stroke();

let x = 300;
let speed = 5;
let radius = 150;

function draw() {
    window.requestAnimationFrame(draw);
    console.log('ok!');
    c.clearRect(0, 0, innerWidth, innerHeight)
    c.fillStyle = 'lightgreen';
    c.beginPath();
    c.arc(x, 200, radius, 0, 2 * Math.PI);
    c.fill();
    c.stroke();

    if (x + radius > innerWidth || x - radius < 0) {
        speed = -speed;
    }

    x += speed;
}

draw();