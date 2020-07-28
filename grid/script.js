(function(){
    const mainmenu = document.querySelector(".menu");
    const gnb=document.querySelector("ul");
    const btn=document.querySelector(".btn_menu")
    const container=document.querySelectorAll(".container")
    const item=document.querySelectorAll(".item");
    const item2=document.querySelectorAll(".item2");
    console.log(container)
    console.log(item2)
    console.log(gnb)
    btn.addEventListener("click",function(e){
        let target = e.target;
        let index =  target.getAttribute("value");
        let pretarget=null;
        index = parseInt(index)// parseInt문자열타입 숫자로 전환

        if(pretarget != null){
            mainmenu.classList.remove("menu_deg");
            for(let i=0;i<3;i++){
                container[i].classList.remove("container_deg");
                }
            btn.classList.remove("btn_menu_op");
            }
            pretarget=target;
            mainmenu.classList.add("menu_deg")
            for(let i=0;i<3;i++){
                container[i].classList.add("container_deg");
                }
            btn.classList.add("btn_menu_op");
            for(let i=0;i<9;i++){
                item[i].classList.remove("item_spin");
            }
            for(let i=0;i<11;i++){
                item2[i].classList.remove("item2_spin");
            }
        
    })




    gnb.addEventListener("click",function(e){
        let target = e.target;
        let index =  target.getAttribute("value");
        index = parseInt(index)// parseInt문자열타입 숫자로 전환
        if(index == 0){
            mainmenu.classList.add("menu_deg");
            for(let i=0;i<9;i++){
                item[i].classList.add("item_spin");
            }
            for(let i=0;i<3;i++){
            container[i].classList.add("container_deg");
            }
            container[0].classList.remove("hide");
            container[1].classList.add("hide");
            container[2].classList.add("hide");
            btn.classList.add("btn_menu_op");

        }
        if(index == 1){
            mainmenu.classList.add("menu_deg");
            for(let i=0;i<11;i++){
                item2[i].classList.add("item2_spin");
            }
            for(let i=0;i<3;i++){
            container[i].classList.add("container_deg");
            }
            container[1].classList.remove("hide");
            container[0].classList.add("hide");
            container[2].classList.add("hide");
            btn.classList.add("btn_menu_op");

        }
        if(index == 2){
            mainmenu.classList.add("menu_deg");
            for(let i=0;i<9;i++){
                item[i].classList.add("item_spin");
            }
            for(let i=0;i<3;i++){
            container[i].classList.add("container_deg");
            }
            container[2].classList.remove("hide");
            container[1].classList.add("hide");
            container[0].classList.add("hide");
            btn.classList.add("btn_menu_op");

        }
        mainmenu.classList.remove("menu_deg");
        container[0].classList.remove("container_deg");
        container[1].classList.remove("container_deg");
        container[2].classList.remove("container_deg");
        btn.classList.remove("btn_menu_op");
        
        
        
        })
    //             gnb.addEventListener("click",function(e){
    //                 let target = e.target;
    //                 let index = target.getAttribute("value");
    //                 index = parseInt(index);
    //                 if(index>=0 || index<=2){
    //                     mainmenu.classList.add("menu_deg");
    //                 }
    // })
})();




