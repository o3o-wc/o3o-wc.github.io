(function(){
    const clockcontainer = document.querySelector(".js-clock"),
     clocktitle = clockcontainer.querySelector("h1");

    function gettime() {
        const date = new Date();
        //시간과 날짜표현하는 객체
        const minutes = date.getMinutes();
        // 현재 시간과 날짜에서 분을 받아옴
        const hours = date.getHours();
        // 현재 시간과 날짜에서 시간을 받아옴
        const seconds = date.getSeconds();
        //현재 시관가 날짜에서 초를 받아옴
        clocktitle.innerText=`${hours<10 ? `0${hours}`:hours}:${minutes < 10 ? `0${minutes}`:minutes}:${seconds < 10 ? `0${seconds}` : seconds }`;
        // clocktitle 의 내용을 변경 / 시,분,초 의 단위가 10보다 작을시 앞에 0을 붙임
    }//현재 시간을 받아오는 함수


    function timeset(){
        gettime();
        // 홈페이지를 실행시 실행딜레이를 제거
        setInterval(gettime,1000);
        // gettime 함수를 1000ms마다 실행
    }//html 내의 시간을 실시간으로 업데이트 해주는 함수
    timeset()
    //  실시간 시간 업데이트

    const formelm = document.querySelector(".js-form"),
          inputelm = formelm.querySelector("input[type='text']"),
          iptext = document.querySelector(".js-iptext");
        
    const user_Lstorage = "currentUser";
    function savename(text){
        localStorage.setItem(user_Lstorage,text)
        // localstorage에 key와value를 등록
    }//localstorage에 key와value를 등록해주는 함수

    function addCN(e){
        e.preventDefault();
        //현재 이벤트의 기본동작을 중지시킴 이경우에는 submit
        const currentvalue = inputelm.value;
        // input의 내용을 가져옴
        showingtext(currentvalue);
        savename(currentvalue);
    }

    function addname(){
        formelm.classList.remove("hide");
        //form에 hide 클래스 제거
        formelm.addEventListener("submit",addCN);
        //이벤트 추가 , 전송 이벤트 발생시 addCN이라는 함수 실행
    }

    function showingtext(text){
        formelm.classList.add("hide");
        //form에 hide 클래스 추가
        iptext.classList.remove("hide");
        //iptext(h4)에 hide 클래스 제거
        iptext.innerHTML = `Hello ${text}`;
        //iptext(h4)에 Hello ${text} => text입력내용 =Hello text내용
    }

    function loadname(){
        const currentUser = localStorage.getItem(user_Lstorage);
        //localstorage에서 user_Lstorage[currentUser(Key)]에 등록된 value값을 받아옴
        if(currentUser === null){
            // 유저가 없을시 아래함수 실행
            addname();
        } else {
            // 유저가 있을시 아래함수 실행
            showingtext(currentUser);
        }
    }

    function nameactive(){
        loadname();
    }
    nameactive();
    // 이름등록

})()