let key = "f3860499b7637297d98274c59e0c47f9"

function getWeather(){
    let currentCity = document.getElementById("citySearched")
    let temperature = document.getElementById("temperature")
    let city = document.getElementById("city").value
    
    fetch(`http://localhost:3000/city/${city.length ? city : "Gothenburg"}`)
        .then(res => res.json())
        .then(data => {
            currentCity.innerHTML = data.name
            temperature.innerHTML = Math.round(data.main.temp)
            console.log(data)
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
            question.innerHTML = data[0].setup
            setTimeout( () => {
                punchline.innerHTML = data[0].punchline
            }, 2000)
            console.log(data)
        }).
        catch(error => {
            console.log(error)
        })
}
