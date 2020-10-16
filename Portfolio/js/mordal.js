(function(){
    const closebtn = document.querySelector(".close");
    const modal =document.querySelector(".modal");
    const modalimg = modal.getElementsByTagName("img")
    const img=document.querySelectorAll(".rtg");
    const btn=document.querySelector(".btnlink");
    const text=document.querySelector(".text")
    const imgbtn=document.querySelectorAll(".btn")

    for(let i=0;i<img.length;i++){
        img[i].addEventListener("click",function(e){
        let num = e.target.getAttribute("alt");
        if(num == 1){
            btn.setAttribute.href="https://o3o-wc.github.io/web/index.html";
            text.innerHTML="Responsive Web"
            modalimg[0].src="./images/mokup/Responsive Web/반응형5.png"
            modalimg[1].src="./images/mokup/Responsive Web/Isometric-Web-Pages-Mockup.png"
            modalimg[2].src="./images/mokup/Responsive Web/반응형3.png"
        }
        if(num == 2){
            btn.href="111";
            btn.classList.add("hide")
            text.innerHTML="Coffee shop"
            modalimg[0].src="./images/mokup/coffeeshop/커피숍3.png"
            modalimg[1].src="./images/mokup/coffeeshop/커피숍1.png"
            modalimg[2].src="./images/mokup/coffeeshop/커피숍2.png"
        }
        if(num == 3){
            btn.href="https://o3o-wc.github.io/grid/grid.html";
            text.innerHTML="Grid Web"
            modalimg[0].src="./images/mokup/grid/그리드2.png"
            modalimg[1].src="./images/mokup/grid/그리드.png"
            modalimg[2].src="./images/mokup/grid/그리드3.png"
        }
        if(num == 4){
            btn.href="https://o3o-wc.github.io/Momentum/index.html";
            text.innerHTML="Momentum"
            modalimg[0].src="./images/mokup/Momentum/모멘텀.png"
            modalimg[1].src="./images/mokup/Momentum/모멘텀3.png"
            modalimg[2].src="./images/mokup/Momentum/모멘텀2.png"
        }
        if(num == 5){
            btn.href="https://o3o-wc.github.io/interactive/index.html";
            text.innerHTML="Interactive Web"
            modalimg[0].src="./images/mokup/interactive/인터렉티브3.png"
            modalimg[1].src="./images/mokup/interactive/인터렉티브2.png"
            modalimg[2].src="./images/mokup/interactive/인터렉티브1.png"
        }
        modal.classList.add("on");
        document.body.classList.add("hidescroll")
    })
}
for(let i=0;i<img.length;i++){
    imgbtn[i].addEventListener("click",function(e){
    let num = e.target.getAttribute("alt");
    if(num == 1){
        btn.setAttribute.href="https://o3o-wc.github.io/web/index.html";
        text.innerHTML="Responsive Web"
        modalimg[0].src="./images/mokup/Responsive Web/반응형5.png"
        modalimg[1].src="./images/mokup/Responsive Web/Isometric-Web-Pages-Mockup.png"
        modalimg[2].src="./images/mokup/Responsive Web/반응형3.png"
    }
    if(num == 2){
        btn.href="111";
        btn.classList.add("hide")
        text.innerHTML="Coffee shop"
        modalimg[0].src="./images/mokup/coffeeshop/커피숍3.png"
        modalimg[1].src="./images/mokup/coffeeshop/커피숍1.png"
        modalimg[2].src="./images/mokup/coffeeshop/커피숍2.png"
    }
    if(num == 3){
        btn.href="https://o3o-wc.github.io/grid/grid.html";
        text.innerHTML="Grid Web"
        modalimg[0].src="./images/mokup/grid/그리드2.png"
        modalimg[1].src="./images/mokup/grid/그리드.png"
        modalimg[2].src="./images/mokup/grid/그리드3.png"
    }
    if(num == 4){
        btn.href="https://o3o-wc.github.io/Momentum/index.html";
        text.innerHTML="Momentum"
        modalimg[0].src="./images/mokup/Momentum/모멘텀.png"
        modalimg[1].src="./images/mokup/Momentum/모멘텀3.png"
        modalimg[2].src="./images/mokup/Momentum/모멘텀2.png"
    }
    if(num == 5){
        btn.href="https://o3o-wc.github.io/interactive/index.html";
        text.innerHTML="Interactive Web"
        modalimg[0].src="./images/mokup/interactive/인터렉티브3.png"
        modalimg[1].src="./images/mokup/interactive/인터렉티브2.png"
        modalimg[2].src="./images/mokup/interactive/인터렉티브1.png"
    }
    modal.classList.add("on");
    document.body.classList.add("hidescroll")
})
}

    closebtn.addEventListener("click",function(){
        modal.classList.remove("on");
        btn.classList.remove("hide")
        document.body.classList.remove("hidescroll");
    })
})()