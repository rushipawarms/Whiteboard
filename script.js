let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
let mouseD=false;
// canvas.height=window.innerHeight-100;
// canvas.width=window.innerWidth;
let { top: canvasTop } = canvas.getBoundingClientRect();


canvas.height = window.innerHeight - canvasTop;
canvas.width = window.innerWidth;
window.addEventListener("resize", function () {
    canvas.height = window.innerHeight - canvasTop;
    canvas.width = window.innerWidth;
})
canvas.addEventListener("mousedown", function(e){

    mouseD=true;
    let x=e.clientX;
    let y=e.clientY-canvasTop;
    ctx.beginPath();
    ctx.moveTo(x,y);
    
})

canvas.addEventListener("mousemove", function(e){
    if(mouseD==true)
    {
    let x=e.clientX;
    let y=e.clientY-canvasTop;
    ctx.lineTo(x,y);
    ctx.stroke();
    }
    
})

canvas.addEventListener("mouseup", function(e){
    mouseD=false;
})