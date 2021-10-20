let photoUpload=document.querySelector("#upload-photo");

let upload=document.querySelector("#img");
upload.addEventListener("click",function(){
    photoUpload.click();
})

let download=document.querySelector('#download');
download.addEventListener("click",function(){
 let filepath=canvas.toDataURL("image/png");
 let atag=document.createElement("a");
 atag.setAttribute("download","canvas.png");
 atag.setAttribute("href",filepath);
 atag.click();
 atag.remove();

})

photoUpload.addEventListener("change", function(){
   let path=photoUpload.files[0].path;

   

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

    let image=document.createElement("img");
    image.setAttribute("class","image");
    image.setAttribute("src", path);

    stickyConent.appendChild(image);
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
        image.style.display=image.style.display=="none"? "block" :"none";
    })
    close.addEventListener("click",function(){
        sticky.remove();
    })

    
})
