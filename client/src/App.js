import React, {Component} from 'react';
import NavBar from './NavBar';
import { Grid,Row,Col} from 'react-bootstrap';


class App extends Component {
	constructor(props){
		super(props);
		this.state = { 
			isAuthenticated: false,
			name: 'howdy'
		};
		this.authChange = this.authChange.bind(this);
	}
	
	authChange(signedIn, name){
		this.setState({
			isAuthenticated: signedIn,
			name: name
		});
	}
	
	render() {
		return (
			<div>
					<NavBar user={this.state}/>
					<Grid>
					<Row>
						<Col xs={1} sm={2} md={2} lg={3}>

						</Col>
						<Col xs={10} sm={8} md={8} lg={6}>
							{this.props.children && React.cloneElement(this.props.children, {
								authChange: this.authChange,
								user: this.state
							})}
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
