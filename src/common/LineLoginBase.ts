const Windows = window as any

export class LIFF {
	liff: any = Windows.liff
	liffId = '1653889562-E1gkq4o8'//'1614469837-39D866X7'
	profile = {}
	async initialize(liffId?: string) {
		await this.liff.init({ liffId: liffId || this.liffId })
		if (!this.liff.isLoggedIn()) {
			this.liff.login()
		} else {
			this.profile = await this.liff.getProfile();
		}
	}
	async getProfile() {
		this.profile = await this.liff.getProfile();
		return this.profile
	}
	async ScanCode() {
		if (this.liff.scanCode) {
			const resultQR = this.liff.scanCode()
			return resultQR
		}
	}
	closeLiff() {
		this.liff.closeWindow();
	}
	sendMessage(Msg: Array<any>) {
		this.liff.sendMessages(Msg)
	}
	getOS() {
		return this.liff.getOS();
	}
	getLanguage() {
		return this.liff.getLanguage();
	}
	getAccessToken() {
		return this.liff.getAccessToken();
	}
	async getDecodedIDToken() {
		const result = await this.liff.getDecodedIDToken();
		return result
	}
}
export default new LIFF()