import React from 'react';
import { Panel, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import App from './AppServices';
import { browserHistory } from 'react-router';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
		this.handleOnEmailChange = this.handleOnEmailChange.bind(this);
		this.handleOnPasswordChange = this.handleOnPasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		
	}
	
	handleOnEmailChange(event){
		this.setState({email: event.target.value});
	}
	
	handleOnPasswordChange(event){
		this.setState({password: event.target.value});
	}
	
	handleSubmit(event){
		event.preventDefault();
		App.authenticate({
			type: 'local',
			'email': this.state.email,
			'password': this.state.password
		})
		.then(result => { 
			browserHistory.push('/chat');
		})
		.catch(error => {
			console.error('Error authenticating', error);
		});
	}
	//TODO: Handle redirect or message if already signed in
	// error handling and display

	render() {
		
		const title = (<h3>Sign In</h3>);
		return (
			<Panel header={title}>
				<form onSubmit={this.handleSubmit}>
					<FormGroup controlId='name'>

						<ControlLabel>Email</ControlLabel>
						<FormControl type='text' onChange={this.handleOnEmailChange}	placeholder='your@email.com'/>

						<ControlLabel>Password</ControlLabel>
						<FormControl type='password' onChange={this.handleOnPasswordChange} placeholder='********'/>

					</FormGroup>
					<a href='/signup'>Not a member? Sign Up</a>
					<Button className="pull-right" type='submit'>Sign In</Button>

				</form>
			</Panel>
		);
	}

}

export default SignIn;
