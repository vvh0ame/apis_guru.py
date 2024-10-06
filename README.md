# apis_guru.js
Web-API for [apis.guru](https://apis.guru) website which is wikipedia for Web-API's

## Example
```JavaScript
async function main() {
	const { ApisGuru } = require("./apis_guru.js")
	const apisGuru = new ApisGuru()
	const basicMetrics = await apisGuru.getBasicMetrics()
	console.log(basicMetrics)
}

main()
```
