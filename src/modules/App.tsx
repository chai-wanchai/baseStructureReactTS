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
			statusMessage: ''
		};
		this.initialize = this.initialize.bind(this);
		this.closeApp = this.closeApp.bind(this);
	}
	componentDidMount() {
		window.addEventListener('load', this.initialize);
	}

	initialize() {
		liff.init(async () => {

			let profile = await liff.getProfile();
			alert(JSON.stringify(profile))
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
			text: "Thank you, Bye!"
		}]).then(() => {
			liff.closeWindow();
		});
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
						================>>>
						{JSON.stringify(this.state)}
					</p>
					<button color="primary" onClick={this.closeApp}>Close</button>
				</header>
				<div style={{ height: '20px' }} />

			</React.Fragment>
		)
	}
}

