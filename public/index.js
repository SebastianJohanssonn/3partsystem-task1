async function getWeather(){
    let currentCity = document.getElementById("citySearched")
    let temperature = document.getElementById("temperature")
    let weather = document.getElementById("weather")
    let city = document.getElementById("city").value
    
    await fetch(`http://localhost:3000/city/${city.length ? city : "Gothenburg"}`)
        .then(res => res.json())
        .then(data => {
            currentCity.innerHTML = "City:<br>" + data.name
            temperature.innerHTML = "Temperature:<br>" + Math.round(data.main.temp) + "&#8451"
            weather.innerHTML = "Weather:<br>" + data.weather[0].main
            document.getElementById("city").value = ""
        }).
        catch(error => {
            console.log(error)
        })
}

async function getJoke(){
    let question = document.getElementById("question")
    let punchline = document.getElementById("punchline")
    
    await fetch(`http://localhost:3000/joke`)
        .then(res => res.json())
        .then(data => {
            if(question.innerHTML && punchline.innerHTML){
                question.innerHTML = ""
                punchline.innerHTML = ""
            }else {
                question.innerHTML = data[0].setup
                setTimeout( () => {
                    punchline.innerHTML = data[0].punchline
                }, 2000)
            }
        }).
        catch(error => {
            console.log(error)
        })
}
