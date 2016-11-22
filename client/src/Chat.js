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

let messageService = null;
let apiService = null;

class Chat extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			messages: []
		};
	}
	
	componentDidMount() {		
		messageService = App.service('messages');
		apiService = App.service('aiapis');
		messageService.find({
			query: {
				$sort: { createdAt: -1 },
				$limit: this.props.limit || 18
			}
		}).then(page => this.setState({messages: page.data}));
					
		messageService.on('created', message => 
			this.setState({messages: this.state.messages.concat(message)}));
	
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
		let data = {
			query: {message: this.state.text}
		};
		messageService.create({
			text: this.state.text
		}).then(() => this.setState({text:''}));
		apiService.get(1, data).then(res => console.log(res.action+' in '+res.parameters.city));		
		
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
