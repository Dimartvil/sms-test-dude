require('dotenv').config();

const app = require('./server');

const http = require('http');

const server = http.createServer(app);

require('./database');

require('./sockets').connection(server);

server.listen(app.get('port'), () => {
  console.log("Hello from", app.get('port'));
})