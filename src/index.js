'use strict';
const path = require('path');
const app = require('./app');
const port = app.get('port');
const server = app.listen(port);

console.log(path.parse(__dirname));
server.on('listening', () =>
	console.log(`Feathers application started on ${app.get('host')}:${port} and public folder of ${app.get('public')}` )
);

