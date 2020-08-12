(function(){
    const bodyelm = document.querySelector("body");

    const img_number = 5;

    function img_src(img_number){
        const image = new Image();
        bodyelm.style=`background:url(../Momentum/images/${img_number + 1}.jpg)`;
        //0~4의 숫자를 랜덤 변경후 1을더함 css의 body 의 background:url 속성의 값을 실행할떄마다 랜덤으로 변경
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
})()