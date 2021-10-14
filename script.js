let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
let mouseD=false;
let pointsDB=[];
let line=[];
let redoA=[];
// canvas.height=window.innerHeight-100;
// canvas.width=window.innerWidth;
let { top: canvasTop } = canvas.getBoundingClientRect();
canvas.height = window.innerHeight - canvasTop;
canvas.width = window.innerWidth;
window.addEventListener("resize", function () {
    canvas.height = window.innerHeight - canvasTop;
    canvas.width = window.innerWidth;
    drawLine();
})
canvas.addEventListener("mousedown", function(e){
    if(redoA.length)
    {
        redoA=[];
    }
    mouseD=true;
    let x=e.clientX;
    let y=e.clientY-canvasTop;
    ctx.beginPath();
    ctx.moveTo(x,y);  
    let poits={
        id:"md",
        x:x,
        y:y
    }
    line.push(poits);
})
canvas.addEventListener("mousemove", function(e){
    if(mouseD==true)
    {
    let x=e.clientX;
    let y=e.clientY-canvasTop;
    ctx.lineTo(x,y);
    ctx.stroke();
    let poits={
        id:"mm",
        x : x,
        y : y
    }
    line.push(poits);
    }
    
})
canvas.addEventListener("mouseup", function(e){
    mouseD=false;
    pointsDB.push(line);
    console.log(pointsDB);
    line=[];
})


