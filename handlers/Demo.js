// The name of the intent is the name of the file + .js

// Every handler exports the function handleIntent taking the intent JSON object as parameter
// Returns intent JSON response
exports.handleIntent = function (intent) {
    console.log("Handling demo intent!");

    return {
        "speech": {
            "text": "Ich kann dich hören und freue mich darauf dir zu helfen."
        }
    };
};
