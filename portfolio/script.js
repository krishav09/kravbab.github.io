console.log("script")


const canvas = document.getElementById("canvas");
const level_1 = document.getElementById("level_1");
const level_2 = document.getElementById("level_2");

const ctx = canvas.getContext("2d")


let x = 0;
let y = 0;
let vx = 0;
let vy = 0;
const rectWidth = 50;
const rectHeight = 50;




function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    x += vx;
    y += vy;
    ctx.fillRect(x, 100 - y, 50, 50)



    x = Math.min(Math.max(x, 0), canvas.width - rectWidth);
    y = Math.min(Math.max(y, 0), canvas.height - rectHeight);


    if (x + rectWidth >= canvas.width) {
        level_1.style.opacity = '0'; // Set opacity to 0 for fade-out effect
        level_1.style.display = 'none';
        level_2.style.display = 'block';
    }

    requestAnimationFrame(update)
}

update();