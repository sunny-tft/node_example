// require the http module
const http = require('http');

// the PORT is being read from the ecosystem.config.yml and set as an environment variable, will default to port 3000 when running locally
const port = process.env.PORT || 3000;

// the NODE_ENV is being read from the ecosystem.config.yml and set as an environment variable
const environment = process.env.NODE_ENV || "development";

// the NODE_ENV is being read from the ecosystem.config.yml and set as an environment variable
const password = process.env.PASSWORD || "topsecret";

// we setup the request handler to respond to incoming http requests
const requestHandler = (request, response) => {
  console.log(request.url);
  // we printout the environment and password
  response.end('Hello Node.js Server! env: ' + environment + " password : " + password)
};

// we create the server
const server = http.createServer(requestHandler);

// we create a socklisten on PORT
server.listen(port, (err) => {
  if (err) {
    // if something went wrong binding to the port
    return console.log('something bad happened', err)
  }
  // a notification that the server is up and on which port it's running on can be checked inside ~/.pm2/logs/* if started via pm2
  console.log(`server is listening on ${port}`)
});
