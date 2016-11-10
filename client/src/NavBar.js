import React from 'react';
import logo from './logo.svg';
import {
	Nav,
	Navbar,
	NavItem
} from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

class NavBar extends React.Component {

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
				<Navbar.Collapse>
				<Nav>
					<LinkContainer to="/chat">
						<NavItem eventKey={1}>Chat</NavItem>
					</LinkContainer>
						<NavItem eventKey={2} href="#">Learn</NavItem>
				</Nav>

					<Nav pullRight>
						<NavItem eventKey={1} href="#">Profile</NavItem>
							<LinkContainer to="/SignIn">
								<NavItem eventKey={2}>Sign In</NavItem>
							</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}

}

export default NavBar;
