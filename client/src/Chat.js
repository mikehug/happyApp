import React from 'react';

class Chat extends React.Component {
	render() {
		return (
			<div>
				<MessageList messages={MESSAGES}/>
				<MessageInput/>
			</div>
		);
	}
}

class MessageList extends React.Component {
	render() {
		const listItems = this.props.messages.map((message) =>
			<li key={message._id}>
				{message.text}
			</li>
		);
		return <div>
			<ul>
				{listItems}
			</ul>
		</div>;
	}
}

class MessageInput extends React.Component {
	render() {
		return <div>
			<form>
				<input type='text' placeholder="Send Message"/>
				<button type='button'>Send</button>
			</form>
		</div>;
	}
}

let MESSAGES = [
	{
		'text': 'Hello Feathers',
		'_id': 'Vh5PpIinPWcq1Cp1'
	},
	{
		'text': 'Hello Burdy!',
		'_id': 'Vh5PpIinPWcq1Cp2'
	}
];




export default Chat;
