(function(){
    // api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key} 
    const KEY_WEATHER = "location";
    const API_KEY = "20d67a9c6f5bce56354b6ae7e2ea65cc";
    const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?"
    const weather_text=document.querySelector(".js-weather_text")

    function getWeather(obj){
        fetch(
            `${BASE_URL}lat=${obj.lat}&lon=${obj.log}&appid=${API_KEY}&units=metric`
        )
        .then(function(response) {
        return response.json();
  })
  .then(function(myJson) {
    // console.log(JSON.stringify(myJson));
    // console.log(myJson);
    const name = myJson.name;
    const temp = Math.floor(myJson.main.temp);
    weather_text.innerHTML=`지역: ${name} 온도:${temp}℃`
  });
    }

    function handlerSuccess(position){
        const lat = position.coords.latitude; //위도
        const log = position.coords.longitude; //경도
        const coordObj = {
            lat : lat,
            log : log
        }
        localStorage.setItem(KEY_WEATHER,JSON.stringify(coordObj));
        getWeather(coordObj);
    }
    function handlerError(){
        console.log("Geolocation is not supported by this browser.");
    }

    function getlocation(){
        navigator.geolocation.getCurrentPosition(handlerSuccess,handlerError)
    }

    function loadWeaher(){
        const currentCoords = localStorage.getItem(KEY_WEATHER);
        if(currentCoords === null){
            // 위도,경도 정보가져오기
            getlocation();
        }else{
            // 위도,경도 정보로 날씨를 알아오기
            getWeather(JSON.parse(currentCoords));
        }
    }
    loadWeaher();
})()