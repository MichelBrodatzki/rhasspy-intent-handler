const http = require('./server.js');
const handlers = require('auto-load')(__dirname + "/handlers");

console.log("Starting intent handler ...");

http.start("0.0.0.0", 8086, intent => {
    if (intent['intent'] != undefined) {
        if (intent.intent['name'] != undefined) {
            if (handlers[intent.intent.name]) {
                return handlers[intent.intent.name].handleIntent(intent);
            } else {
                return {
                    "speech": {
                        "text": "Entschuldigung. Ich habe dich nicht verstanden!"
                    }
                };
            }
        }
    } {
        // For now echo object, if it isn't an intent
        console.log(intent);
    }
});

