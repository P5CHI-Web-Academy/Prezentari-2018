/* jshint esversion: 6 */

const express = require("express");
const md5 = require("md5");
const sha = require("sha.js");




let app = express();


app.all("*", function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
});

app.get('/', (req, res) => {
    console.log(req);
    let { text, mode } = req.query;
    if (
        [
            "sha1",
            "sha2",
            "md5"
        ].indexOf(mode) !== -1
        &&
        typeof(text) === "string"
    ) {
        let hash = '';
        switch (mode) {
            case "sha1":
                hash = sha('sha256').update(text).digest('hex');
            break;
            case "sha2":
                hash = sha('sha512').update(text).digest('hex');
            break;
            case "md5":
                hash = md5(text);
            break;
        }

        res.write(hash);
        res.end();

        return;
    }
    
    
    res.statusCode = 500;
    res.send('Incorrect Input data');
});


app.listen(
    8080,
    "0.0.0.0",
    (err) => {
        if (err) return console.error(err);

        console.log("Server started on 0.0.0.0:8080");
    }
);