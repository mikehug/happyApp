import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './Chat'

class App extends Component {

	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to React</h2>
				</div>
				<div className='App-intro'>
					<Chat messages={MESSAGES}/>
				</div>
			</div>
		);
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



export default App;
