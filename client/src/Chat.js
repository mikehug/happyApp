import React from 'react';
import {
	Panel, Form, FormControl, ListGroup, ListGroupItem, Button} from 'react-bootstrap';

class Chat extends React.Component {
	render() {
		return (
			<Panel>
				<MessageList messages={this.props.messages}/>
				<MessageInput/>
			</Panel>
		);
	}
}

class MessageList extends React.Component {
	render() {
		const listItems = this.props.messages.map((message) =>
			<ListGroupItem key={message._id}>
				{message.text}
			</ListGroupItem>
		);
		return <div>
			<ListGroup>
				{listItems}
			</ListGroup>
		</div>;
	}
}

class MessageInput extends React.Component {
	render() {
		return <Panel>
			<Form >
				<FormControl type='text' placeholder="What's on your mind?"/>
				<Button type='submit'>Send</Button>
			</Form>
		</Panel>;
	}
}




export default Chat;
