const { API } = require("./api")
const fs = require("fs")
let api=[]
API.forEach((item) => {
	if (item.isSharebillService) {
		if (item.noApi) {
			item.url = item.urlSuffix
		} else {
			item.url = `/mapi/sharebills-service/api/${item.urlSuffix}`
		}
	} else {
		if (item.gapiStr) {
			item.url = `/gapi/${item.urlSuffix}`
		} else {
			item.url = `/mapi/${item.urlSuffix}`
		}
    }
    api.push(item)
})

fs.writeFileSync("./utilitiesapp.json", JSON.stringify(api))
