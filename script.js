const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Indore';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '86735e3d84msha27f172f618170fp1909f2jsn1b16b6119fa3',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed

    })
    .catch(err => console.error(err))
}

 const getNewYork = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York' , options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        ny1.innerHTML = response.feels_like
        ny2.innerHTML = response.humidity
        ny3.innerHTML = response.max_temp
        ny4.innerHTML = response.min_temp
        ny5.innerHTML = response.sunrise
        ny6.innerHTML = response.sunset
        ny7.innerHTML = response.temp
        ny8.innerHTML = response.wind_degrees
        ny9.innerHTML = response.wind_speed

    })
    .catch(err => console.error(err))

 }
 const getLondon = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        l1.innerHTML = response.feels_like
        l2.innerHTML = response.humidity
        l3.innerHTML = response.max_temp
        l4.innerHTML = response.min_temp
        l5.innerHTML = response.sunrise
        l6.innerHTML = response.sunset
        l7.innerHTML = response.temp
        l8.innerHTML = response.wind_degrees
        l9.innerHTML = response.wind_speed

    })
    .catch(err => console.error(err))
 }
 const getMelbourne = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Melbourne', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        m1.innerHTML = response.feels_like
        m2.innerHTML = response.humidity
        m3.innerHTML = response.max_temp
        m4.innerHTML = response.min_temp
        m5.innerHTML = response.sunrise
        m6.innerHTML = response.sunset
        m7.innerHTML = response.temp
        m8.innerHTML = response.wind_degrees
        m9.innerHTML = response.wind_speed

    })
    .catch(err => console.error(err))
 }
 const getTokyo = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        t1.innerHTML = response.feels_like
        t2.innerHTML = response.humidity
        t3.innerHTML = response.max_temp
        t4.innerHTML = response.min_temp
        t5.innerHTML = response.sunrise
        t6.innerHTML = response.sunset
        t7.innerHTML = response.temp
        t8.innerHTML = response.wind_degrees
        t9.innerHTML = response.wind_speed
    })
    .catch(err => console.error(err))
 }

submit.addEventListener("click", (e) => {
    e.preventDefault()
  getWeather(city.value)
})

getWeather("Indore")
getNewYork()
getLondon()
getMelbourne()
getTokyo()