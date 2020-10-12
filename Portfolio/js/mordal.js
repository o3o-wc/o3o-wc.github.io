(function(){
    const closebtn = document.querySelector(".close")
    const modal =document.querySelector(".modal")
    const modalimg = modal.getElementsByTagName("img")
    const img=document.querySelectorAll(".rtg")
    const btn=document.querySelector(".btnlink")
    let link=  btn.getAttribute("href")

    for(let i=0;i<img.length;i++){
    img[i].addEventListener("click",function(e){
        let num = e.target.getAttribute("alt");
        console.log(btn)
        if(num == 1){
            btn.setAttribute.href="https://o3o-wc.github.io/web/index.html";
        }
        if(num == 2){
            btn.href="111";
            btn.classList.add("hide")
        }
        if(num == 3){
            btn.href="https://o3o-wc.github.io/grid/grid.html";
        }
        if(num == 4){
            btn.href="https://o3o-wc.github.io/Momentum/index.html";
        }
        if(num == 5){
            btn.href="https://o3o-wc.github.io/interactive/index.html";
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