import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { LinkContainer } from  'react-router-bootstrap';

class Dashboard extends React.Component {

	render() {
		return (
			<Jumbotron >
				<h3>Chat with Happy Techie wellness bot.</h3>

				<LinkContainer to={{ pathname: '/signup'}}>
					<Button className="pull-right" bsStyle="primary">Sign Up</Button>
				</LinkContainer>
			</Jumbotron>
		);
	}

}

export default Dashboard;
