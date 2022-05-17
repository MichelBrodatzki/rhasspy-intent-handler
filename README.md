# Rhasspy Intent Handler
**This is (currently) a proof-of-concept! It's neither documented well nor safe to use!**

Provides a simple HTTP server, accepting Rhasspy intent requests.

## Installation
This software requires nodejs. All necessary dependencies can then be installed with ```npm install```.

## Usage
The server can be run with ```node index.js```.

The Rhasspy satellite's Intent Handling has to be set to "Remote HTTP". The Remote URL is 'http://\[IP-OF-INTENT-HANDLER\]:8086/'. Currently every path works, but soon(tm) it'll only work on POST /intent.

## Development
To handle intents, add a new module in the folder handlers/. This module must be called \[INTENTNAME\].js and must export the function ```handleIntent(intent)``` which returns a response object.
A demo intent is included.

## ToDo
- [ ] Tests
- [ ] Documentation
- [ ] Configurable port
