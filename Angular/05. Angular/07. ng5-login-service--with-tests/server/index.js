/* jshint esversion: 6 */
let _config  = require("./config");
let _classes = {
    http : require("http"),
    serverMiddleware : require("./lib/server-middleware")
};

let app    = new _classes.serverMiddleware();
let server = _classes.http.createServer(function (req, res) {
    app.handle(req, res, function () {
        res.end(`Route ${req.url} not found`);
    });
});

app.all("^/", function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,auth-token');

    next();
});

app.post('/', require("./lib/capture-post-data-url-encoded"));

require("./services/auth")(app);
require("./services/user")(app);


// app.get('/', function (req, res, next) {
//     res.setHeader("Content-Type","text/plain; charset=utf-8");
//     res.write("Matched /\n");

//     next();
// });

// app.get("^/test", function (req, res, next) {
//     res.end("test done :)\n");
// });


server.listen(
    _config.server.port,
    _config.server.ip, (err) => {
    if (err) return console.error(err);

    console.log(`Server started on ${_config.server.ip}:${_config.server.port}`);
});