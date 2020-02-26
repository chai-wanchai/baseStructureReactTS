import React from 'react';
import logo from '../asset/logo.svg';
import '../style/App.css';
const Window = window as any
const liff = Window.liff
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
		this.initialize = this.initialize.bind(this);
		this.closeApp = this.closeApp.bind(this);
		this.ScanCode = this.ScanCode.bind(this)
	}
	componentDidMount() {
		this.initialize()
	}

	initialize() {
		liff.init({
			liffId: "1614469837-39D866X7" // use own liffId
		}, async () => {
			if (!liff.isLoggedIn()) {
				liff.login()
			}
			let profile = await liff.getProfile();
			this.setState({
				displayName: profile.displayName,
				userId: profile.userId,
				pictureUrl: profile.pictureUrl,
				statusMessage: profile.statusMessage
			});
		});
	}
	closeApp(event) {
		event.preventDefault();
		liff.sendMessages([{
			type: 'text',
			text: "Thank you, Bye! chai"
		}]).then(() => {
			liff.closeWindow();
		});
	}
	ScanCode() {
		if (liff.scanCode) {
			liff.scanCode().then(result => {
				this.setState({ resultQR: result })
			});
		}
	}
	render() {
		return (
			<React.Fragment>
				<header className="App-header">
					<img src={this.state.pictureUrl} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
					<p className="App-intro">
						Display Name : {this.state.displayName} <br />
						User ID : {this.state.userId} <br />
						Status Msg : {this.state.statusMessage}
						================>>> 55555
						{JSON.stringify(this.state)}
					</p>
					<button color="primary" onClick={this.ScanCode}>QR CODE</button>
					<button color="primary" onClick={this.closeApp}>Close</button>
				</header>
				<div style={{ height: '20px' }} />

			</React.Fragment>
		)
	}
}
