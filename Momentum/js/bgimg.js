(function(){
    const bodyelm = document.querySelector("body");

    const img_number = 5;

    function img_src(img_number){
        const image = new Image();
        bodyelm.style=`background:url(../Momentum/images/${img_number + 1}.jpg)`;
        image.classList.add("bgimg")
        bodyelm.appendChild(image)

    }
    
    function random(){
        const number = Math.floor(Math.random()*img_number);
        return number;
    }

    function background(){
        const randomnumber = random();
        img_src(randomnumber);
    }
    background();
     //배경이미지
})()