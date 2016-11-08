import React, {Component} from 'react';
import Chat from './Chat';
import NavBar from './NavBar';
import { Grid,Row,Col,Panel} from 'react-bootstrap';

let MESSAGES = [
	{
		'text': 'Hello Feathers',
		'_id': 'Vh5PpIinPWcq1Cp1'
	}, {
		'text': 'Hello Burdy!',
		'_id': 'Vh5PpIinPWcq1Cp2'
	}
];

class App extends Component {
	render() {
		return (
			<div>
					<NavBar/>
					<Grid>
					<Row className="show-grid">
						<Col xs={1} sm={2} md={2} lg={3}>

						</Col>
						<Col xs={10} sm={8} md={8} lg={6}>
								<Chat messages={MESSAGES}/>
						</Col>
						<Col xsHidden sm={2} md={2} lg={3}>

						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}
export default App;
