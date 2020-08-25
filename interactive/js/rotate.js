(function(){
    const containerelm = document.querySelector("#container")
    const stageelm = document.querySelector("#stage")
    document.addEventListener("mousemove",move);
    function move(e){
        let mousepos={x:0,y:0}
        mousepos.x = -1+(e.clientX/window.innerWidth)*2;
        mousepos.y =1- (e.clientY/window.innerHeight)*2;
        // containerelm.style.transform="rotateX("+mousepos.x+"deg) rotateY("+mousepos.y+"deg)";
        containerelm.style.transform=`rotateX(${mousepos.x*4}deg) rotateY(${mousepos.y*4}deg)`;
    }
})()