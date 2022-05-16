# Rhasspy Intent Handler
Provides a simple HTTP server, accepting Rhasspy intent requests.

## Installation
This software requires nodejs. All necessary dependencies can then be installed with ```npm install```.

## Usage
The server can be run with ```node index.js```.

## Development
To handle intents, add a new module in the folder handlers/. This module must be called \[INTENTNAME\].js and must export the function ```handleIntent(intent)```.
A demo intent is included.

## ToDo
- [ ] Tests
- [ ] Documentation
- [ ] Configurable port
