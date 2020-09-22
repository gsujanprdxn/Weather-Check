/* Author: 

*/

// var stars = document.querySelectorAll('.star');

// for(x=0;x<stars.length;x++){
//     stars[x].addEventListener("click",()=>{
//         console.log("I am click")
//     })
// }

// hamberger menu starts here
document.querySelector('.hamburger-menu').addEventListener('click',()=>{
    var navbar = document.querySelector('nav');
    if (navbar.style.display == "flex"){
        navbar.style.display = "none";
        document.querySelector('.hamburger-menu').classList.remove("change")
    } else {
        navbar.style.display = "flex";
        document.querySelector('.hamburger-menu').classList.add("change")
    }
  })
// hamberger menu ends here

// weather api starts here
const weatherApi ={
    key:"e7ae8a8e31b4cae3a42e7f8abfe1614a",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}

var srchbox =document.getElementById('inputweather');
var searchweather =document.getElementById('searchweather');
srchbox.addEventListener('keypress',(event)=>{
    if(event.keyCode ==13){
        getweatherreport(srchbox.value)
    }
})
searchweather.addEventListener('click',(event)=>{
    getweatherreport(srchbox.value)  
})

// get weather report
function getweatherreport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather =>{
        if (weather.status >= 200 && weather.status <= 299) {
            document.querySelector('#error').style.visibility = 'hidden';
        return weather.json();
        }
        else {
            document.querySelector('#errors').innerHTML = `${city}`;
            document.querySelector('#error').style.visibility = 'visible';
        }
    }).then(showweatherreport);

}

function showweatherreport(weathers){
    var city = document.getElementById('city');
    var temp = document.getElementById('temp');
    var date = document.getElementById('date');
    var day = document.getElementById('day');
    var months = document.getElementById('month');
    var weathericon = document.getElementById('weathericon');
    var windspeed = document.getElementById('windspeed');
    var humidities = document.getElementById('humidity');
    var compass = document.getElementById('compass');
    var todaydate =new Date();
    var dateformat = datemanage(todaydate);
    city.innerText =`${weathers.name},${weathers.sys.country}`;
    temp.innerHTML =`${Math.round(weathers.main.temp)}&deg;C`;
    date.innerText = dateformat[0]
    day.innerText = dateformat[1]
    months.innerHTML = dateformat[2]
    const {id} = weathers.weather[0];
    const {speed,deg} = weathers.wind;
    const {humidity} = weathers.main;

    if(deg >= 45 && deg<=135 ){
        compass.innerText = 'East'
    }
    else if(deg > 135 && deg <= 225 ){
        compass.innerText = 'South'
    }
    else if(deg > 225 && deg <= 315 ){
        compass.innerText = 'West'
    }
    else if(deg > 315 && deg <= 360 && deg < 45 ){
        compass.innerText = 'North'
    }
    windspeed.innerText = speed;
    humidities.innerText = humidity;
    if(id < 250){
        weathericon.src ='assets/images/icons/icon-11.svg'
    }
    else if(id > 250 && id < 350){
        weathericon.src ='assets/images/icons/icon-4.svg'
    }
    else if(id > 450 && id < 550){
        weathericon.src ='assets/images/icons/icon-10.svg'
    }
    else if(id > 550 && id < 650){
        weathericon.src ='assets/images/icons/icon-14.svg'
    }
    else if(id > 700 && id < 800){
        weathericon.src ='assets/images/icons/icon-8.svg'
    }
    else if(id > 800 && id < 850){
        weathericon.src ='assets/images/icons/icon-3.svg'
    } 
}

function datemanage(datearg){
    var days  = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    var date = datearg.getDate();
    var day = days[datearg.getDay()];
    var month = months[datearg.getMonth()];
    var data = [date,day,month];
    return data;
}

window.addEventListener("load",()=>{
    getweatherreport('mumbai')
})

var preloader = document.getElementById('loading');
preloader.addEventListener("load",myfunction());
function myfunction(){
    preloader.style.display='none';
}
















