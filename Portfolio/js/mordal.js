(function(){
    const closebtn = document.querySelector(".close")
    const modal =document.querySelector(".modal")
    const img=document.querySelectorAll(".rtg")

    for(let i=0;i<img.length;i++){
    img[i].addEventListener("click",function(e){
        console.log(e.target)
        modal.classList.add("on");
        document.body.classList.add("hidescroll")
    })
}

    closebtn.addEventListener("click",function(){
        modal.classList.remove("on");
        document.body.classList.remove("hidescroll");
    })
})()