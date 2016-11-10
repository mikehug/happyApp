import React from 'react';
import { Panel, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class SignUp extends React.Component {

	render() {

		const title = (
			<h3>Sign Up</h3>
		);


		return (
			<Panel header={title}>
				<form>
					<FormGroup controlId='name'>

						<ControlLabel>Email</ControlLabel>
						<FormControl type='text'	placeholder='your@email.com'/>

						<ControlLabel>Password</ControlLabel>
						<FormControl type='password' placeholder='********'/>

						<ControlLabel>Confirm Password</ControlLabel>
						<FormControl type='password' placeholder='********'/>

					</FormGroup>

					<a href='/signin'>Already a member? Sign In</a>

					<Button className="pull-right" type='submit'>Sign Up</Button>

				</form>
			</Panel>
		);
	}

}

export default SignUp;
