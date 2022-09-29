require('dotenv').config();
const express = require("express");
const port = process.env.PORT || 3001;
const app = express();

app.get("/backend/make-call-that-uses-secret/:userName/:password", (req, res) => {
    if(req.params.userName !== 'brad' || req.params.password !== 'popcorn') {
        return res.sendStatus(401);
    }

    console.log('the secret is: ', process.env.API_KEY);
    // let's pretend I called some 3rd-party API with this secret

    res.send('success: this is definitely coming from the server, and is not anywhere in the front-end code');
});

app.listen(port);
console.log("server started on port " + port);
