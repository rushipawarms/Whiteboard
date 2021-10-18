let undo=document.querySelector("#undo");
let redo=document.querySelector("#redo");
let pencil=document.querySelector("#pencil");
let eraser=document.querySelector("#eraser");
let pencilOption=document.querySelector("#pencil-options");
let eraserOption=document.querySelector("#eraser-options");
let red=document.querySelector(".red");
let yellow=document.querySelector(".yellow");
let blue=document.querySelector(".blue");
let black=document.querySelector(".black");
let pencilSize=document.querySelector("#pencil-size");
let eraserSize=document.querySelector("#eraser-size");


pencilWidth=10;
eraserWidth=10;

pencilSize.addEventListener("change",function(e){

    let size=e.target.value;
    pencilWidth=size;
    ctx.lineWidth=pencilWidth;
})
eraserSize.addEventListener("change",function(e){

    let size=e.target.value;
    eraserWidth=size;
    ctx.lineWidth=eraserWidth;
})

red.addEventListener("click",function(){
    ctx.strokeStyle="red";
})
yellow.addEventListener("click",function(){
    ctx.strokeStyle="yellow";
})
blue.addEventListener("click",function(){
    ctx.strokeStyle="blue";
})
black.addEventListener("click",function(){
    ctx.strokeStyle="black";
})
    
pencil.addEventListener("click",function(){
    if(!pencil.classList.contains("active-tool"))
    {
        eraser.classList.remove("active-tool");
        pencil.classList.add("active-tool");
        eraserOption.classList.add("hide");
        ctx.strokeStyle="black";
        ctx.lineWidth=pencilWidth;
    }
    else
    {
        if(pencilOption.classList.contains("hide"))
        {
            pencilOption.classList.remove("hide");
        }
        else{
            pencilOption.classList.add("hide");
        }
        
    }
})
eraser.addEventListener("click",function(){
    if(!eraser.classList.contains("active-tool"))
    {
        pencil.classList.remove("active-tool");
        eraser.classList.add("active-tool");
        pencilOption.classList.add("hide");
        ctx.strokeStyle="white";
        ctx.lineWidth=eraserWidth;
    }
    else{
        if(eraserOption.classList.contains("hide"))
        {
            eraserOption.classList.remove("hide");
        }
        else{
            eraserOption.classList.add("hide");
        }
    }
})

undo.addEventListener("click",function(){
    if(pointsDB.length)
    {
    lalestLine=pointsDB.pop();
    redoA.push(lalestLine);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawLine();
    }
    
})

redo.addEventListener("click",function(){
    if(redoA.length)
    {
        let line=redoA.pop();
        pointsDB.push[line];
        for(let j=0;j<line.length;j++)
            {
                ctx.lineWidth=line[j].lineSize;
                ctx.strokeStyle = line[j].color;
                if(line[j].id=="md")
                {
                    ctx.beginPath();
                    ctx.moveTo(line[j].x,line[j].y);
                }
                else{
                    ctx.lineTo(line[j].x,line[j].y);
                    ctx.stroke();
                }
            }
    }
   
   
})

function drawLine()
{
    for(let i=0;i<pointsDB.length;i++)
    {
        let line=pointsDB[i];
        
        for(let j=0;j<line.length;j++)
        {
            ctx.lineWidth=line[j].lineSize;
           ctx.strokeStyle = line[j].color;
        
            if(line[j].id=="md")
            {
                ctx.beginPath();
                ctx.moveTo(line[j].x,line[j].y);
            }
            else{
                ctx.lineTo(line[j].x,line[j].y);
                ctx.stroke();
            }
        }

    }
}