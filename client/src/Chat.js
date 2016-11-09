import React from 'react';
import {
	Panel,
	Form,
	FormControl,
	ListGroup,
	ListGroupItem,
	Button
} from 'react-bootstrap';

class Chat extends React.Component {
	render() {
		return (
			<div>
			<Panel style={{'min-height':'40vh'}}>
				<MessageList messages={this.props.messages}/>
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
