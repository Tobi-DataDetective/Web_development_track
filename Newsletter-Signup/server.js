const mailchimp = require("@mailchimp/mailchimp_marketing");
const express = require('express');

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mailchimp.setConfig({
    apiKey: "7bebce77391ca764ea7cab04a5076be7-us13",
    server: "us13",
});

app.get('/audiance', async(req, res, next) => {
    // get information aboutmembers
    const response = await mailchimp.ping.getList("5f482e1d0e");
    console.log(response);
    res.status(200).json();
})


app.post('/audiance', async(req, res, next) => {
    // Adding members to the list
    const { email, status } = req.body;

    const response = await mailchimp.lists.addListMember("", {
        email_address: email,
        status: status,
    });
    res.status(200).json(response);
});


app.listen(3000, () => console.log("server is running on 3000"));

// getInformation();