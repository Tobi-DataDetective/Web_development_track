//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const { url } = require("inspector");
const { options } = require("request");
const { json } = require("body-parser");

const app = express();

//list id: 5f482e1d0e
// api key: 7bebce77391ca764ea7cab04a5076be7-us13

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));

// home route
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {

    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;


    var data = {
        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }

        }]
    }

    const jsonData = JSON.stringify(data);
    const url = "https://us13.api.mailchimp.com/3.0/lists/5f482e1d0e"

    const options = {
        method: "post",
        auth: "folayan:7bebce77391ca764ea7cab04a5076be7-us13"
    }

    const request = https.request(url, options, function(response) {
        response.on("data", function(data) {
            console.log(JSON.parse(data))
        });
    });
    request.write(jsonData);
    // console.log(firstName, lastName, email);
    request.end();
});



app.listen(3000, function() {
    console.log("Running on port 3000");
});