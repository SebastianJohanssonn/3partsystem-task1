const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const request = require("request")

let key = "f3860499b7637297d98274c59e0c47f9"

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/city/:city", (req, res) => 
{
    request(`https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&units=metric&appid=${key}`, function(err, response, body){
        if(err){
            res.json({
                message: err
            })
        }else {
            res.send(
                body
            )
        }   
    })
})

app.get("/joke", (req, res) =>
{
    request(`https://official-joke-api.appspot.com/jokes/programming/random`, function(err, response, body){
        if(err){
            res.json({
                message: err
            })
        }else {
            res.send(
                body
            )
        }   
    })   
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))