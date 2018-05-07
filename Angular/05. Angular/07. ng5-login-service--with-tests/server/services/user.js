module.exports = function (app) {
    app.all('^/user/content', function (req, res) {
        res.end("Down worry be happy... Bob Marley");
    });
};