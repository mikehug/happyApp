import React, {Component} from 'react';
import NavBar from './NavBar';
import { Grid,Row,Col} from 'react-bootstrap';


class App extends Component {
	
	render() {
		return (
			<div>
				{/* Pass in user info so that nav can adapt to auth status */}
					<NavBar user={this.state}/>
					<Grid>
					<Row>
						<Col xs={1} sm={2} md={2} lg={3}></Col>
						
						<Col xs={10} sm={8} md={8} lg={6}>
							{this.props.children}
						</Col>
						
						<Col xsHidden sm={2} md={2} lg={3}></Col>
					</Row>
				</Grid>
			</div>
		);
	}
}
export default App;
