(function(){
    const retelm = document.querySelectorAll(".ret")


    window.addEventListener("scroll",ret_on)

    function ret_on(){
        let bodyheigth = document.body.getBoundingClientRect().height - window.innerHeight;
        let currentScroll = window.pageYOffset;
        let scrolled = (currentScroll / bodyheigth)*100;
        scrolled = Math.floor(scrolled)
        console.log(scrolled)
        switch(true){
            case scrolled<13:
                for(let i=0;i<9;i++){
                    retelm[i].classList.remove("ret_on")
                }
                retelm[0].classList.add("ret_on")
                break;
            case scrolled<25:
                for(let i=0;i<9;i++){
                    retelm[i].classList.remove("ret_on")
                }
                retelm[1].classList.add("ret_on")
                break;
            case scrolled<36:
                for(let i=0;i<9;i++){
                    retelm[i].classList.remove("ret_on")
                }
                retelm[2].classList.add("ret_on")
                break;
            case scrolled<49:
                for(let i=0;i<9;i++){
                    retelm[i].classList.remove("ret_on")
                }
                retelm[3].classList.add("ret_on")
                break;
            case scrolled<61:
                for(let i=0;i<9;i++){
                    retelm[i].classList.remove("ret_on")
                }
                retelm[4].classList.add("ret_on")
                break;
            case scrolled<71:
                for(let i=0;i<9;i++){
                    retelm[i].classList.remove("ret_on")
                }
                retelm[5].classList.add("ret_on")
                break;
            case scrolled<83:
                for(let i=0;i<9;i++){
                    retelm[i].classList.remove("ret_on")
                }
                retelm[6].classList.add("ret_on")
                break;
                
            case scrolled<95:
                for(let i=0;i<9;i++){
                    retelm[i].classList.remove("ret_on")
                }
                retelm[7].classList.add("ret_on")
                break;
                
            case scrolled<100:
                for(let i=0;i<9;i++){
                    retelm[i].classList.remove("ret_on")
                }
                retelm[8].classList.add("ret_on")
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