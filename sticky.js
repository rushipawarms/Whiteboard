let sticky=document.querySelector("#sticky");

sticky.addEventListener("click", function(){
  
    let sticky=document.createElement("div");
    sticky.classList.add("sticky");

    let stickyHeader=document.createElement("div");
    stickyHeader.classList.add("sticky-header");

    let minimize=document.createElement("div");
    minimize.classList.add("minimize");

    let close=document.createElement("div");
    close.classList.add("close");

    let stickyConent=document.createElement("div");
    stickyConent.classList.add("sticky-content");

    let stickyText=document.createElement("textarea");
    stickyText.setAttribute("id", "sticky-box");
    stickyText.setAttribute("cols", "30");
    stickyText.setAttribute("rows", "10");

    stickyConent.appendChild(stickyText);
    stickyHeader.appendChild(minimize);
    stickyHeader.appendChild(close);

    sticky.appendChild(stickyHeader);
    sticky.appendChild(stickyConent);

    document.body.appendChild(sticky);
    let xinitial;
    let yinitial;
    stickyHold=false;
    stickyHeader.addEventListener("mousedown",function(e){
        stickyHold=true;
        xinitial=e.clientX;
        yinitial=e.clientY
        
    })
    stickyHeader.addEventListener("mousemove",function(e){
        if(stickyHold){
            let finalX=e.clientX;
            let finalY=e.clientY;

            let dx=finalX-xinitial;
            let dy=finalY-yinitial;

            let {top,left}=sticky.getBoundingClientRect();

            sticky.style.top=top+dy+"px";
            sticky.style.left=left+dx+"px";

            xinitial=finalX;
            yinitial=finalY;
        }

    })
    stickyHeader.addEventListener("mouseup",function(e){
        stickyHold=false;
    })


    minimize.addEventListener("click", function(){
        stickyText.style.display=stickyText.style.display=="none"? "block" :"none";
    })
    close.addEventListener("click",function(){
        sticky.remove();
    })

})