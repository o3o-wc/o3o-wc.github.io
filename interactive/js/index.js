(function(){
    
    let boxelm = document.querySelectorAll(".card_box")
    
    
    function onstagescroll(){

        let currentScroll = window.pageYOffset;
        let bodyheigth = document.body.getBoundingClientRect().height - window.innerHeight;
        let scrolled = (currentScroll / bodyheigth) * 100;
        let size = scrolled*8.2
        if(scrolled<1){
            boxelm[0].style.transform = 'translateZ(900vw)';
            boxelm[1].style.transform = 'translateZ(800vw)';
            boxelm[2].style.transform = 'translateZ(700vw)';
            boxelm[3].style.transform = 'translateZ(600vw)';
            boxelm[4].style.transform = 'translateZ(500vw)';
            boxelm[5].style.transform = 'translateZ(400vw)';
            boxelm[6].style.transform = 'translateZ(300vw)';
            boxelm[7].style.transform = 'translateZ(200vw)';
            boxelm[8].style.transform = 'translateZ(100vw)';
        }else{
            boxelm[0].style.transform = 'translateZ(' + (900+size) + 'vw)';
            boxelm[1].style.transform = 'translateZ(' + (800+size) + 'vw)';
            boxelm[2].style.transform = 'translateZ(' + (700+size) + 'vw)';
            boxelm[3].style.transform = 'translateZ(' + (600+size) + 'vw)';
            boxelm[4].style.transform = 'translateZ(' + (500+size) + 'vw)';
            boxelm[5].style.transform = 'translateZ(' + (400+size) + 'vw)';
            boxelm[6].style.transform = 'translateZ(' + (300+size) + 'vw)';
            boxelm[7].style.transform = 'translateZ(' + (200+size) + 'vw)';
            boxelm[8].style.transform = 'translateZ(' + (100+size) + 'vw)';
            
        }
        // 542 가 최대 사이즈
    }


    window.addEventListener("scroll",onstagescroll)
})()