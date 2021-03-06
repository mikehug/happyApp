import React from 'react';
import logo from './logo.svg';
import {
	Nav,
	Navbar,
	NavItem
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import App from './AppServices.js';
import { Link, browserHistory} from 'react-router';

class NavBar extends React.Component {
	
	displayNavLinks(){
		if(App.get('user')) {
			return <Navbar.Collapse>
							<Nav>
								<LinkContainer to={{ pathname: '/chat'}}>
									<NavItem eventKey={1}>Chat</NavItem>
								</LinkContainer>
									<NavItem eventKey={2} href="#">Learn</NavItem>
							</Nav>	
							<Nav pullRight>
									<LinkContainer  to="/SignIn">
										<NavItem onClick={this.signOut} eventKey={2}>Sign Out</NavItem>
									</LinkContainer>
							</Nav>
						</Navbar.Collapse>;
		}
		else { 
			return	<Navbar.Collapse>
								<Nav pullRight>
										<LinkContainer to={{ pathname: '/signin'}}>
											<NavItem eventKey={2}>Sign In</NavItem>
										</LinkContainer>
								</Nav>
							</Navbar.Collapse>;
		}
	}
	
	signOut(){
		App.logout().then(()=> browserHistory.push('/signin'));
	}
	
	render() {
		return (
			<Navbar collapseOnSelect>
				<Navbar.Header>
						<Link to={'/'}>
							<Navbar.Brand>
								<img alt='Happy Techie Logo' src={logo}/>
							</Navbar.Brand>
						</Link>
					<Navbar.Toggle/>
				</Navbar.Header>
				{this.displayNavLinks()}
			</Navbar>
		);
	}

}

export default NavBar;
