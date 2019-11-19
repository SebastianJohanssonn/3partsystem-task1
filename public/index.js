function getWeather(){
    let currentCity = document.getElementById("citySearched")
    let temperature = document.getElementById("temperature")
    let weather = document.getElementById("weather")
    let city = document.getElementById("city").value
    
    fetch(`http://localhost:3000/city/${city.length ? city : "Gothenburg"}`)
        .then(res => res.json())
        .then(data => {
            currentCity.innerHTML = "Choosen city:<br>" + data.name
            temperature.innerHTML = "Current temperature:<br>" + Math.round(data.main.temp) + "&#8451"
            weather.innerHTML = "Current weather:<br>" + data.weather[0].main
        }).
        catch(error => {
            console.log(error)
        })
}

function getJoke(){
    let question = document.getElementById("question")
    let punchline = document.getElementById("punchline")
    
    fetch(`http://localhost:3000/joke`)
        .then(res => res.json())
        .then(data => {
            if(!question.innerHTML && !punchline.innerHTML){
                question.innerHTML = data[0].setup
                question.scrollIntoView()
                setTimeout( () => {
                    punchline.innerHTML = data[0].punchline
                    punchline.scrollIntoView()
                }, 2000)
            }else {
                question.innerHTML = ""
                punchline.innerHTML = ""
            }
        }).
        catch(error => {
            console.log(error)
        })
}
