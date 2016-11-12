import React from 'react';
import { Panel, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class SignIn extends React.Component {

	render() {

		const title = (
			<h3>Sign In</h3>
		);


		return (
			<Panel header={title}>
				<form>
					<FormGroup controlId='name'>

						<ControlLabel>Email</ControlLabel>
						<FormControl type='text'	placeholder='your@email.com'/>

						<ControlLabel>Password</ControlLabel>
						<FormControl type='password' placeholder='********'/>

					</FormGroup>
					<a href='/signup'>Not a member? Sign Up</a>
					<Button className="pull-right" type='submit'>Sign In</Button>

				</form>
			</Panel>
		);
	}

}

export default SignIn;
