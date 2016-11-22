'use strict';

const hooks = require('./hooks');
const apiai = require('apiai');


class Service {
	
	constructor(options) {
		this.options = options || {};
	}
	
	guid() {
		function s4() {
			return Math.floor((1 + Math.random()) * 0x10000)
				.toString(16)
				.substring(1);
		}
		return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
			s4() + '-' + s4() + s4() + s4();
	}
	
	get(id, params) {
		let text = params.query.message;
		console.log(text);	
		return  new Promise((resolve, reject) => {
			
			const clientToken = 'ce510917e39b4358a396a0694a19b101';
			const ai = apiai(clientToken);
			let request = ai.textRequest(text, {sessionId: id});
			request.on('response', function(response) {
				console.log(response.result);
				resolve(response.result);
			});
			
			request.on('error', function(error) {
				console.log(error);
				reject(error);
			});
			request.end();	
		})
		
		
		// return Promise.resolve({
		// 	id, text: `A new with ID: ${id}!`
		// });	
	}
	
	find(params) {
		return Promise.resolve([]);
	}
	
	// get(id, params) {
	// 	console.log("hello");
	// 	return Promise.resolve({
	// 		id, text: `A new message with ID: ${id}!`
	// 	});
	// }
	
	create(data, params) {
		if(Array.isArray(data)) {
			return Promise.all(data.map(current => this.create(current)));
		}
	
		return Promise.resolve(data);
	}
	
	update(id, data, params) {
		return Promise.resolve(data);
	}
	
	patch(id, data, params) {
		return Promise.resolve(data);
	}
	
	remove(id, params) {
		return Promise.resolve({ id });
	}
}

module.exports = function(){
	const app = this;

	// Initialize our service with any options it requires
	app.use('/aiapis', new Service());

	// Get our initialize service to that we can bind hooks
	const aiapiService = app.service('/aiapis');

	// Set up our before hooks
	aiapiService.before(hooks.before);

	// Set up our after hooks
	aiapiService.after(hooks.after);
};

module.exports.Service = Service;
