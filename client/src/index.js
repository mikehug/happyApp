import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Chat from './Chat';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Dashboard from './Dashboard';
import 'bootstrap/dist/css/bootstrap.css';
import './bootstrap-paper.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			{/* add childern of app here*/}
			<IndexRoute component={Dashboard}/>
			<Route path="/chat" component={Chat}/>
			<Route path="/signup" component={SignUp}/>
			<Route path="/signin" component={SignIn}/>
		</Route>
	</Router>
	, document.getElementById('root')
);
