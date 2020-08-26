(function(){
    const lielm = document.querySelectorAll("li")
    const retelm = document.querySelectorAll(".ret")
    let boxelm = document.querySelectorAll(".card_box")
    for(let i=0;i<lielm.length;i++){
    lielm[i].addEventListener("click",listclick)
    }
    function listclick(e){
        let target=e.target
        let bodyheigth = document.body.getBoundingClientRect().height - window.innerHeight;
        let currentScroll = window.pageYOffset;
        let scrolled = (currentScroll / bodyheigth)*100;
        if(target.innerText == retelm[0].innerText){
            window.scrollTo({top:bodyheigth*0,behavior:'smooth'})
            // 
        }
        if(target.innerText == retelm[1].innerText){
            window.scrollTo({top:bodyheigth*0.14,behavior:'smooth'})
            // 
        }
        if(target.innerText == retelm[2].innerText){
            window.scrollTo({top:bodyheigth*0.26,behavior:'smooth'})
            // 
        }
        if(target.innerText == retelm[3].innerText){
            // window.scrollTo({top:bodyheigth*0.4,behavior:'smooth'})
            window.scrollTo({top:bodyheigth*0.38,behavior:'smooth'})
        }
        if(target.innerText == retelm[4].innerText){
            // window.scrollTo({top:bodyheigth*0.52,behavior:'smooth'})
            window.scrollTo({top:bodyheigth*0.50,behavior:'smooth'})
        }
        if(target.innerText == retelm[5].innerText){
            // window.scrollTo({top:bodyheigth*0.62,behavior:'smooth'})
            window.scrollTo({top:bodyheigth*0.62,behavior:'smooth'})
            
        }
        if(target.innerText == retelm[6].innerText){
            window.scrollTo({top:bodyheigth*0.72,behavior:'smooth'})
            // 
        }
        if(target.innerText == retelm[7].innerText){
            // window.scrollTo({top:bodyheigth*0.89,behavior:'smooth'})
            window.scrollTo({top:bodyheigth*0.85,behavior:'smooth'})
        }
        if(target.innerText == retelm[8].innerText){
            window.scrollTo({top:bodyheigth,behavior:'smooth'})
        }
    }
})()