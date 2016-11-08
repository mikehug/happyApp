import React from 'react';
import logo from './logo.svg';
import {
	Nav,
	Navbar,
	NavItem
} from 'react-bootstrap';

class NavBar extends React.Component {

	render() {
		return (
			<Navbar collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<img alt='Happy Techie Logo' src={logo}/>
					</Navbar.Brand>
					<Navbar.Toggle/>
				</Navbar.Header>
				<Navbar.Collapse>
				<Nav>
					<NavItem eventKey={1} href="#">Chat</NavItem>
					<NavItem eventKey={2} href="#">Learn</NavItem>
				</Nav>

					<Nav pullRight>
						<NavItem eventKey={1} href="#">Profile</NavItem>
						<NavItem eventKey={2} href="#">Logout</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}

}

export default NavBar;
