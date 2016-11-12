import React from 'react';
import {
	Panel,
	Form,
	FormControl,
	ListGroup,
	ListGroupItem,
	Button
} from 'react-bootstrap';
import Feathers from 'feathers/client';
import Socketio from 'feathers-socketio/client';
import Hooks from 'feathers-hooks';
import IO from 'socket.io-client';

const title = (
	<h3>Chat</h3>
);

class Chat extends React.Component {
	constructor() {
		super();
		
		this.state = {
			messages: []
		};
	}
	
	
	componentDidMount() {
		
		const socket = IO('http://localhost:3030');
		const app = Feathers()
			.configure(Hooks())
			.configure(Socketio(socket));
		const messageService = app.service('messages');
		
		messageService.find({
			query: {
				$sort: { createdAt: -1 },
				$limit: this.props.limit || 10
			}
		}).then(page => this.setState({messages: page.data}));
			
		console.log(this.state.messages);
		
		messageService.on('created', message => 
			this.setState({messages: this.state.messages.concat(message)}));
	
	}
	
	render() {
		return (
			<div>
				<Panel header={title} >
					<MessageList messages={this.state.messages}/>
				</Panel>
				<MessageInput/>
			</div>
		);
	}
}

class MessageList extends React.Component {
	render() {
		const listItems = this.props.messages.map((message) =>
			<ListGroupItem style={{border: 0}} key={message._id}>
				{message.text}
			</ListGroupItem>
		);
		return <div>
			<ListGroup >
				{listItems}
			</ListGroup>
		</div>;
	}
}

class MessageInput extends React.Component {
	render() {
		return <Panel>
			<Form >
							<FormControl type='text' placeholder='Write a message '/>
							<Button className="pull-right" type='submit'>Send</Button>
			</Form>
		</Panel>;
	}
}

export default Chat;
