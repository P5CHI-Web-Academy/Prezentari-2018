/* jshint esversion: 6 */
module.exports = function () {
    let routes = {

    };
    let app = {};

    let matchURL = function (route, url) {
        return url.match(new RegExp(route));
    };

    app.handle = function (req, res, next) {
        let methodName = req.method.toLowerCase();
        
        if (!(methodName in routes)) return next();

        let i, nextHandler = null;
        let availableList = routes[methodName].filter(
            routeConfig => matchURL(routeConfig.route, req.url)
        );

        let _tick = function () {
            if (availableList.length) {
                let routeConfig = availableList.shift();

                routeConfig.handler(req, res, _tick);
            } else {
                next();
            }
        };

        console.log(availableList);

        _tick();
    };

    let methods = [
        "get", "post", "put", "delete", "options"
    ];
    methods.forEach(methodName => {
        // create array if it doesn't exist
        routes[methodName] = routes[methodName] || [];

        app[methodName] = function (route, handler) {
            routes[methodName].push({
                route : route,
                handler : handler
            });
        };
    });

    app.all = function (route, handler) {
        methods.forEach(methodName => {
            app[methodName](route, handler);
        });
    };

    return app;
};