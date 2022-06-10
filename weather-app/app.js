// importing necessary libraries
const express = require("express");
const https = require("https");


const app = express(); //initializing the express library

app.get("/", function(req, res) {

    // connecting to api
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=a37f7763c738ef9868466660b464c130&units=metric";
    https.get(url, function(response) {
        console.log(response.statusCode); //returning the statusCode

        response.on("data", function(data) {
            //console.log(data) //returning some kind of hexadecimal data
            const weatherData = JSON.parse(data) // converting the hexadecimal data to a JSON format
            console.log(weatherData);

            // tapping into the json file to get the temperature
            const temp = weatherData.main.temp;
            console.log(temp);

            // using the JSON viewer in chrome to print out the weather description
            const descr = weatherData.weather[0].description;
            console.log(descr);

            // sending or displaying the result we want the client to see
            res.write("The weather is currently " + descr);
            res.write("The temperature in Paris is " + temp + "degrees");
            res.send()

            // trying to revearse the case, from JSON to hex
            const object = {
                name: "tobi",
                age: "25"
            }
            console.log(JSON.stringify(object));


        });
    });






    // displaying an output
    // res.send("Server is up and running");
});



app.listen(3000, function() {
    console.log("Running on port 3000");
});