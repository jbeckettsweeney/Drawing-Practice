const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

let running = false;

function getPoints() {
    return {
        a: {
            x: Math.random() * width,
            y: Math.random() * height
        },
        b: {
            x: Math.random() * width,
            y: Math.random() * height
        },
        c: {
            x: Math.random() * width,
            y: Math.random() * height
        },
        d: {
            x: Math.random() * width,
            y: Math.random() * height
        }
    }
}

function getColor() {
    let r = Math.random() * 256;
    let g = Math.random() * 256;
    let b = Math.random() * 256;

    return `rgba(${r}, ${g}, ${b}, 1)`
}

function drawSide(a, b, c, fill = false) {
    let color = getColor();
    ctx.fillStyle = color;
    ctx.strokeStyle = color;

    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.lineTo(c.x, c.y);
    if (fill) {
        ctx.fill();
    } else {
        ctx.closePath();
        ctx.stroke();
    }
}

function draw() {
    if (running) {
        if (canvas.getContext) {
            ctx.clearRect(0, 0, width, height);

            let p = getPoints();

            drawSide(p.a, p.b, p.c, true);
            drawSide(p.a, p.b, p.d);
            drawSide(p.a, p.d, p.c);
            drawSide(p.d, p.b, p.c);

            window.requestAnimationFrame(draw);
        }
    }
}

function start() {
    running = true;
    window.requestAnimationFrame(draw);
}

function stop() {
    running = false;
}