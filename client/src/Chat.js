import React from 'react';
import {
	Panel,
	Form,
	FormControl,
	ListGroup,
	ListGroupItem,
	Button
} 
	from 'react-bootstrap';
import App from './AppServices';
import {browserHistory} from 'react-router';

let messageService = null;

class Chat extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: []
		};	
	}	
	
	componentDidMount() {	
		let user = App.get('user');
		if(user){
			messageService = App.service('messages');
			messageService.find({
				query: {
					user_id: user._id,
					$sort: { createdAt: -1 },
					$limit: this.props.limit || 18
				}
			}).then(page => this.setState({messages: page.data}));
						
			messageService.on('created', message => 
				this.setState({messages: this.state.messages.concat(message)}));	
		}
		else {
			browserHistory.push('/signin');
		}
	}	
	
	render() {
		return (
			<div>
				<MessageList  messages={this.state.messages}/>
				<MessageInput/>
			</div>
		);
	}
}

class MessageList extends React.Component {
	componentWillUpdate(){
		var node = this.refs.scrollable;
		this.shouldScrollBottom = 
		(node.scrollTop + node.offsetHeight) === node.scrollHeight;
			
	}
	
	componentDidUpdate() {
		// // Whenever something happened, scroll to the bottom of the chat window
		if (this.shouldScrollBottom) {
			var node = this.refs.scrollable;
			node.scrollTop = node.scrollHeight;
		}
		
	}
	
	render() {
		const listItems = this.props.messages.map((message) =>
			<ListGroupItem style={{border: 0}} key={message._id} >
				{message.text}
			</ListGroupItem>
		);
		return 	<Panel>
							<div ref='scrollable' style={{'height': '50vh', 'overflowY' :'scroll'}}>
								<ListGroup>
									{listItems}
								</ListGroup>
							</div>
						</Panel>;
	}
}

class MessageInput extends React.Component {
	constructor(props){
		super(props);
		//let user = App.get('user');
		this.state = {
			text: ''
		};
		this.handleOnChange = this.handleOnChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleOnChange(event){
		this.setState({text: event.target.value});
	}
	
	handleSubmit(event){
		event.preventDefault();
		let user = App.get('user');
		messageService.create({
			text: this.state.text,
			user_id: user._id
		}).then(() => this.setState({text:''}));
	
	}
	
	render() {
		return <Panel>
			<Form onSubmit={this.handleSubmit} >
							<FormControl type='text' value={this.state.text}
								onChange={this.handleOnChange} placeholder='Write a message '/>
							<Button className="pull-right" type='submit'>Send</Button>
			</Form>
		</Panel>;
	}
}

export default Chat;
