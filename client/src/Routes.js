import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './App';
import Chat from './Chat';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Dashboard from './Dashboard';

const Routes = (props) => (
	<Router {...props}>
		<Route path="/" component={App}>
			{/* add childern of app here*/}
			<IndexRoute component={Dashboard}/>
			<Route path="/chat" component={Chat}/>
			<Route path="/signup" component={SignUp}/>
			<Route path="/signin" component={SignIn}/>
		</Route>
		
	</Router>
);

export default Routes;
