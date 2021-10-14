let undo=document.querySelector("#undo");

undo.addEventListener("click",function(){
    if(pointsDB.length)
    {
        lalestLine=pointsDB.pop();
    redoA.push(lalestLine);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawLine();
    }
    
})
let redo=document.querySelector("#redo");
redo.addEventListener("click",function(){
    if(redoA.length)
    {
        let line=redoA.pop();
        pointsDB.push[line];
        for(let j=0;j<line.length;j++)
            {
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