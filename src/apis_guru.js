class ApisGuru {
	constructor() {
		this.api = "https://api.apis.guru"
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
		}
	}

	async getAllApis() {
		const response = await fetch(
			`${this.api}/list.json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getBasicMetrics() {
		const response = await fetch(
			`${this.api}/metrics.json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {ApisGuru}
