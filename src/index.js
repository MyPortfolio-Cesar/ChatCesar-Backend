const app = require('./app');
const http = require('http');
require('./database');
const socket = require('./socket')

const port = 3001;
const server = http.createServer(app);
const httpServer = server.listen(port, () => {
    console.log(`Server on port ${port}`)
})

socket.connectSockets(httpServer);
