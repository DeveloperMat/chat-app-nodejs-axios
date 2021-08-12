"use strict";

var _express = _interopRequireDefault(require("express"));

var _socket = require("socket.io");

var _http = _interopRequireDefault(require("http"));

var _sockets = _interopRequireDefault(require("./sockets"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = process.env.PORT || 3000;

var server = _http["default"].createServer(app);

app.use(_express["default"]["static"](__dirname + '/public'));
var httpServer = server.listen(port);
console.log("Server on port ".concat(port));
var io = new _socket.Server(httpServer);
(0, _sockets["default"])(io);