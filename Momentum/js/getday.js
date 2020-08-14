(function(){

    function getday() {

        const day_text = document.querySelector(".js-day_text")
        
        const date = new Date();
        const year = date.getFullYear();
        const today = date.getDate();
        const month = date.getMonth()+1;
        // 1부터 시작이 아닌 0부터 시작이여서 +1을함
        let week =["SUN","MON","TUE","WED","THU","FRI","SAT"];
        const day =week[date.getDay()];

        console.log(day)

        day_text.innerHTML=`${year} - ${month < 10 ? `0${month}`:month} - ${today < 10 ? `0${today}`:today} ${day}`
    }
    getday()
})()

