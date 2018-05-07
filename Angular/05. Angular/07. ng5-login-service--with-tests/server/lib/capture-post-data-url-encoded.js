let MAX_POST_SIZE = 1024 * 1024 * 4;

module.exports = function (req, res, next) {
    if (
        [
            "post",
            "put"
        ].indexOf(req.method.toLowerCase()) !== -1
    ) {
        req.body = {};
        let chunks = [];
        let recievedBytes = 0;
        let ended = false;
        
        req.on("data", function (chunk) {
            chunks.push(chunk);

            recievedBytes += chunk.length;

            if (recievedBytes > MAX_POST_SIZE) {
                res.end("Max post size error");

                if (!req.aborted) {
                    request.abort();
                    ended = true;
                }
            }
        });

        
        req.on("end", function () {
            let data = Buffer.concat(chunks, recievedBytes).toString('utf8');

            data.split('&').forEach(str => {
                str = str.split('=');
                let err;
                try {
                    req.body[str[0]] = decodeURIComponent(str[1]);
                } catch (err) {
                    console.warn(err);
                }
            });
            if (!ended) {
                next();
            }
        });


    } else {
        next();
    }
}