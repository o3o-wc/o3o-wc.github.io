(function(){
    const retelm = document.querySelectorAll(".ret")
    const divelm = document.querySelectorAll(".card_title")


    window.addEventListener("scroll",ret_on)

    function ret_on(){
        let bodyheigth = document.body.getBoundingClientRect().height - window.innerHeight;
        let currentScroll = window.pageYOffset;
        let scrolled = (currentScroll / bodyheigth)*100;
        scrolled = Math.floor(scrolled)
        switch(true){
            case scrolled<13:
                for(let i=0;i<9;i++){
                    retelm[i].classList.remove("ret_on")
                    divelm[i].classList.add("hide")
                }
                retelm[0].classList.add("ret_on")
                divelm[0].classList.remove("hide")
                break;
            case scrolled<25:
                for(let i=0;i<9;i++){
                    retelm[i].classList.remove("ret_on")
                    divelm[i].classList.add("hide")
                }
                retelm[1].classList.add("ret_on")
                divelm[1].classList.remove("hide")
                break;
            case scrolled<36:
                for(let i=0;i<9;i++){
                    retelm[i].classList.remove("ret_on")
                    divelm[i].classList.add("hide")
                }
                retelm[2].classList.add("ret_on")
                divelm[2].classList.remove("hide")
                break;
            case scrolled<49:
                for(let i=0;i<9;i++){
                    retelm[i].classList.remove("ret_on")
                    divelm[i].classList.add("hide")
                }
                retelm[3].classList.add("ret_on")
                divelm[3].classList.remove("hide")
                break;
            case scrolled<61:
                for(let i=0;i<9;i++){
                    retelm[i].classList.remove("ret_on")
                    divelm[i].classList.add("hide")
                }
                retelm[4].classList.add("ret_on")
                divelm[4].classList.remove("hide")
                break;
            case scrolled<71:
                for(let i=0;i<9;i++){
                    retelm[i].classList.remove("ret_on")
                    divelm[i].classList.add("hide")
                }
                retelm[5].classList.add("ret_on")
                divelm[5].classList.remove("hide")
                break;
            case scrolled<83:
                for(let i=0;i<9;i++){
                    retelm[i].classList.remove("ret_on")
                    divelm[i].classList.add("hide")
                }
                retelm[6].classList.add("ret_on")
                divelm[6].classList.remove("hide")
                break;
                
            case scrolled<95:
                for(let i=0;i<9;i++){
                    retelm[i].classList.remove("ret_on")
                    divelm[i].classList.add("hide")
                }
                retelm[7].classList.add("ret_on")
                divelm[7].classList.remove("hide")
                break;
                
            case scrolled<100:
                for(let i=0;i<9;i++){
                    retelm[i].classList.remove("ret_on")
                    divelm[i].classList.add("hide")
                }
                retelm[8].classList.add("ret_on")
                divelm[8].classList.remove("hide")
                break;
                }
                    
                    
                    // if(scrolled<=5){
                        //     for(let i=0;i<9;i++){
        //     retelm[i].classList.remove("ret_on")
        //     }
        //     retelm[0].classList.add("ret_on")
        // }
        // else if(5<scrolled<=20){
        //     for(let i=0;i<9;i++){
        //         retelm[i].classList.remove("ret_on")
        //         }
        //         retelm[1].classList.add("ret_on")
        // }
        // else if(20<scrolled<=34){
        //     for(let i=0;i<9;i++){
        //         retelm[i].classList.remove("ret_on")
        //         }
        //         retelm[2].classList.add("ret_on")
        // }
        // else if(34<scrolled<=40){
        //     for(let i=0;i<9;i++){
        //         retelm[i].classList.remove("ret_on")
        //         }
        //         retelm[3].classList.add("ret_on")
        // }
    }

    

})()