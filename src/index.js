import express from 'express';
import {Server as WebSocketServer} from 'socket.io';
import http from 'http';
import Sockets from './sockets';

const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);
app.use(express.static(__dirname + '/public'));



const httpServer = server.listen(port);
console.log(`Server on port ${port}`);

const io = new WebSocketServer(httpServer);

Sockets(io);
