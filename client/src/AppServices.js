import Feathers from 'feathers/client';
import Socketio from 'feathers-socketio/client';
import Hooks from 'feathers-hooks';
import IO from 'socket.io-client';
import Authentication from 'feathers-authentication/client';

const socket = IO('http://localhost:3030');
const app = Feathers()
		.configure(Hooks())
		.configure(Socketio(socket))
		.configure(Authentication({
			storage: window.localStorage
		}));

export default app;