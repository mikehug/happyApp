import React from 'react';
import { Panel, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { Link } from 'react-router';

class SignUp extends React.Component {

	//TODO Validation on password length/security and confirmation. Server side also needed 
	//with email confirmation probably a good idea too. Is post the best way to handle this?
	render() {
		const title = (<h3>Sign Up</h3>);
			
		return (
			<Panel header={title}>
				<form method='post' action="signup">
					<FormGroup controlId='name'>

						<ControlLabel>Email</ControlLabel>
						<FormControl type='text' name='email'	placeholder='your@email.com'/>

						<ControlLabel>Password</ControlLabel>
						<FormControl type='password' name='password' placeholder='********'/>

						<ControlLabel>Confirm Password</ControlLabel>
						<FormControl type='password' placeholder='********'/>

					</FormGroup>

					<Link to={'/signin'}>Already a member? Sign In</Link>

					<Button className="pull-right" type='submit'>Sign Up</Button>

				</form>
			</Panel>
		);
	}

}

export default SignUp;
