const canvas =  document.getElementById('canvas1');
const ctx =  canvas.getContext('2d');
canvas.width = window.innerWidth
canvas.height = window.innerHeight

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight 
});

// ctx.fillStyle = "#000000"
// ctx.fillRect(50, 50, 100, 100)



ctx.font = '24px Arial'; // Set font size and type
ctx.fillStyle = '#000000'; // Set fill color
ctx.fillText('Hello, Canvas!', 150, 250); 

console.log(ctx);

const mouse = {
    x: null, 
    y: null,
}
canvas.addEventListener("click", function (e) {
    mouse.x = e.x
    mouse.y = e.y
    console.log(e);
drawCircle()

})

canvas.addEventListener("mousemove", function (e) {
    mouse.x = e.x
    mouse.y = e.y
    drawCircle()
})

function drawCircle () {
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 50, 0, 2 * Math.PI);
    ctx.fillStyle = "#000000";
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 5
    ctx.stroke();
}
drawCircle()