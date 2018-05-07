/* jshint esversion:6 */

let md5 = require("md5");


let users = {
    "username" : "password",
    "admin" : "pass"
};

let secret_key = "#$%^*&(O^I%JUYHGTFWEDSV";



let isLogined = function (req, res, next) {
    console.log(req);
    if (req.headers["auth-token"]) {
        let token = req.headers["auth-token"];
        
        token = token.split(":");

        let user = token[0];
        token = token[1] || '';

        if (users[user] && token === md5(user + ":" + users[user] + ":" + secret_key)) {
            return next();
        }

    }
    res.setHeader("Content-Type", "text/html;charset=utf8");

    require("fs").readFile(__dirname + "/../templates/403.html", function (err, data) {
        if (err) {
            res.statusCode = 500;
            res.end("Error: " + err.message);
            return;
        }

        res.statusCode = 403;
        res.end(data);
    });
};


module.exports = function (app) {

    app.post('/auth', function (req, res, next) {
        console.log(req.body);
        let { user, password } = req.body;

        if (users[user] && users[user] === password) {
            res.end(
                JSON.stringify({
                    status : "ok",
                    data : {
                        token : user + ":" + md5(user + ":" + password + ":" + secret_key)
                    }
                }, null, "\t")
            );
            return;
        }

        res.end(
            JSON.stringify({
                status : "error",
                message: "incorrect credentials"
            }, null, "\t")
        )
    });

    app.get('^/user', isLogined);
};