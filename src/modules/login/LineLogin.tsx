import React, { Component } from 'react'
import logo from '../../asset/Line_Base.png';
import './lineLogin.css';
import LIFF from '../../common/LineLoginBase';
import AuthApi from '../../api/AuthApi'
export default class LineLogin extends Component<any> {
	liff = LIFF
	constructor(props: any) {
		super(props)
		this.onClickLogin = this.onClickLogin.bind(this)
	}
	async onClickLogin() {
		await this.liff.initialize()
		const line_token = await this.liff.getAccessToken();		
		const result = AuthApi.loginWithLine(line_token);
		console.log(result);
		if (this.props.onClick) {
			this.props.onClick(this.liff)
		}
	};
	render() {
		return (
			<React.Fragment>
				<button className='button-no-default button-expand-90 line-button' onClick={this.onClickLogin}>
					<img src={logo} alt='line'></img>
					<label>Log in with LINE</label>
				</button>
			</React.Fragment>
		)
	}
}
