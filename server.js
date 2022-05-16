const http = require ('http');
const handlers = require('auto-load')(__dirname + "/handlers");

let server = null;

exports.start = function(host, port, onIntentReceived) {
    const requestListener = function (req, res) {
        let response = {"error": "Internal Server Error"};
        if (req.method.toLowerCase() == "post") {
            req.on("data", async function(chunk) {
                try {
                    const intent = JSON.parse(chunk);
                    response = await onIntentReceived(intent);

                    res.setHeader("Content-Type", "application/json");
                    res.writeHead(200);
                    res.end(JSON.stringify(response));
                } catch(e) {
                    response.error = e.message;
                    console.log(`[ERROR - JSON CONVERT] ${e} - Chunk: ${chunk}`);

                    res.setHeader("Content-Type", "application/json");
                    res.writeHead(500);
                    res.end(JSON.stringify(response));
                }
            });
        } else {
            response.error = "Not found";
            console.log(`[ERROR - METHOD NOT SUPPORTED]`);

            res.setHeader("Content-Type", "application/json");
            res.writeHead(404);
            res.end(JSON.stringify(response));
        }
    }

    server = http.createServer(requestListener);
    server.listen(port, host, () => {
        console.log(`HTTP server started on ${host}:${port}`);
    });
};
