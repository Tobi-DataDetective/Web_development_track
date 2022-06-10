// importing necessary libraries
const express = require("express");
const https = require("https");


const app = express(); //initializing the express library

app.get("/", function(req, res) {

    // connecting to api
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=a37f7763c738ef9868466660b464c130&units=metric";
    https.get(url, function(response) {
        console.log(response);
    });



    // dusplaying an output
    res.send("Server is up and running");
});



app.listen(3000, function() {
    console.log("Running on port 3000");
});