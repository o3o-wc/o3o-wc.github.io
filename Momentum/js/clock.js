(function(){
    const clockcontainer = document.querySelector(".js-clock"),
     clocktitle = clockcontainer.querySelector("h1");

    function gettime() {
        const date = new Date(); //시간과 날짜표현하는 객체
        const minutes = date.getMinutes(); // 현재 시간과 날짜에서 분을 받아옴
        const hours = date.getHours(); // 현재 시간과 날짜에서 시간을 받아옴
        const seconds = date.getSeconds();//현재 시관가 날짜에서 초를 받아옴
        clocktitle.innerText=`${hours<10 ? `0${hours}`:hours}:${minutes < 10 ? `0${minutes}`:minutes}:${seconds < 10 ? `0${seconds}` : seconds }`;
        // clocktitle 의 내용을 변경 / 시,분,초 의 단위가 10보다 작을시 앞에 0을 붙임
    }//현재 시간을 받아오는 함수
    function timeset(){
        gettime();// 홈페이지를 실행시 실행딜레이를 제거
        setInterval(gettime,1000); // gettime 함수를 1000ms마다 실행
    }//html 내의 시간을 실시간으로 업데이트 해주는 함수
    timeset()
    //  실시간 시간 업데이트

    const formelm = document.querySelector(".js-form"),
          inputelm = formelm.querySelector("input[type='text']");
    console.log(inputelm)

    function nameset(){
        
    }
    nameset();
})()