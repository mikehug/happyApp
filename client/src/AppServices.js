import Feathers from 'feathers/client';
import Socketio from 'feathers-socketio/client';
import Hooks from 'feathers-hooks';
import IO from 'socket.io-client';

const socket = IO('http://localhost:3030');
const app = Feathers()
		.configure(Hooks())
		.configure(Socketio(socket));

export default app;