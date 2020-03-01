import React from 'react';
import logo from '../asset/logo.svg';
//import '../style/App.css';
import LineLogin from './login/LineLogin'
import Layout from '../common/components/Layout'
import Header from '../common/components/Header';
export default class App extends React.Component<any, any> {
	constructor(props) {
		super(props);
		this.state = {
			displayName: '',
			userId: '',
			pictureUrl: '',
			statusMessage: '',
			resultQR: ''
		};
		this.onLoginWithLine = this.onLoginWithLine.bind(this);
	}
	componentDidMount() {
		
	}
	onLoginWithLine(liff) {		
		console.log(liff);
	}
	render() {
		return (
			<React.Fragment>
				<img src={this.state.pictureUrl} className="App-logo" alt="logo" />
				<p className="App-intro">
					Display Name : {this.state.displayName} <br />
					User ID : {this.state.userId} <br />
					Status Msg : {this.state.statusMessage}
					
						{JSON.stringify(this.state)}
						{JSON.stringify(process.env)}
				</p>
				<LineLogin onClick={this.onLoginWithLine} />
				<button color="primary" >QR CODE</button>
				<button color="primary" >Close</button>

			</React.Fragment>
		)
	}
}
