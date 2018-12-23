const http = require('http');
const App = require('./app');
const config = require('./config');

const server = new App();

const httpServer = http.createServer(server.app).listen(config.PORT);

server.db.once('open', () => console.log('MongoDB Connected!'));

httpServer.on('listening', () => console.log('Listening at ' + config.PORT));
