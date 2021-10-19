let sticky=document.querySelector("#sticky");

sticky.addEventListener("click", function(){
    console.log("hi");

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


    
})