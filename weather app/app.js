// https://api.openweathermap.org/data/2.5/weather?q=dili&appid=fa9fa457c18b1696a22d0eb622a9206a&units=metric

// Api calling
const apiKey ="fa9fa457c18b1696a22d0eb622a9206a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=" ;

// fetching elements from  html                   
let temp=document.querySelector(".tem-text");
let cityName =document.querySelector(".city");
let humadity =document.querySelector(".humadity-text");
let wind =document.querySelector(".wind-text");

let btn=document.querySelector(".search-btn")
let searchBox=document.querySelector(".search-input")

let img = document.querySelector(".main-img");

// main function
async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`)
    var data = await response.json();
    console.log(data)
    cityName.innerHTML=data.name;
    temp.innerHTML=Math.round(data.main.temp) + "°C";
    humadity.innerHTML=data.main.humidity + "%";
    wind.innerHTML=data.wind.speed + " m/s";
    
    // weather condition
     
    let status = data.weather[0].main;
    console.log(status)
   document.querySelector(".weather-condition").innerHTML=status;;

   if(status == "Clear"){
    img.src="clear.png"
   }else if(status == "Clouds"){
    img.src ="clouds.png"
   }else if(status == "Drizzle"){
    img.src = "drizzle.png"
   }else if(status == "Mist"){
    img.src="mist.png"
   }else if(status == "Smoke" ){
    img.src="smoke.png"
   }else if(status == "Haze"){
    img.src ="haze.png"
   }else{
    img.src=="snow.png"
   }
}
btn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
