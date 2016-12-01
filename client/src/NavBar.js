import React from 'react';
import logo from './logo.svg';
import {
	Nav,
	Navbar,
	NavItem
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import App from './AppServices.js';
import {browserHistory} from 'react-router';

class NavBar extends React.Component {
	
	
	logout(){
		App.logout().then(()=> browserHistory.push('/signin'));
	}
	
	isAuthenticated(){
		const { user } = this.props;
		
		if(user.isAuthenticated) {
			return <Navbar.Collapse>
							<Nav>
								<LinkContainer to="/chat">
									<NavItem eventKey={1}>Chat</NavItem>
								</LinkContainer>
									<NavItem eventKey={2} href="#">Learn</NavItem>
							</Nav>	
							<Nav pullRight>
								<NavItem eventKey={1} href="#">{user.name}</NavItem>
									<LinkContainer to="/SignIn">
										<NavItem eventKey={2}>Sign Out</NavItem>
									</LinkContainer>
							</Nav>
						</Navbar.Collapse>;
		}
		else { 
			return	<Navbar.Collapse>
								<Nav pullRight>
									<NavItem eventKey={1} href="#">{user.name}</NavItem>
										<LinkContainer to="/SignIn">
											<NavItem eventKey={2}>Sign In</NavItem>
										</LinkContainer>
								</Nav>
							</Navbar.Collapse>;
		}
	}

	render() {
		return (
			<Navbar collapseOnSelect>
				<Navbar.Header>
						<a href="/">
							<Navbar.Brand>
								<img alt='Happy Techie Logo' src={logo}/>
							</Navbar.Brand>
						</a>
					<Navbar.Toggle/>
				</Navbar.Header>
				{this.isAuthenticated()}
			</Navbar>
		);
	}

}

export default NavBar;
