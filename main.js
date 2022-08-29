var RPC = require("discord-rpc")

const config = require("./config.json");
const client = new RPC.Client({ transport: 'ipc' })

client.on('ready', () => {
	client.request('SET_ACTIVITY', {
		pid: process.pid,
		activity: {
			details: config.line1,
			state: config.line2,
			assets: {
				large_image: config.l_img,
				large_text: config.txt_li
				// small_image : config.s_img,
				// small_text : config.txt_si,
			},
			buttons: [
				{ label: config.button_name1, url: config.button_url1 },
				{ label: config.button_name2, url: config.button_url2 },
			]
		}
	})
})

client.login({ clientId: config.app_id }).catch(console.error);
console.log('Loading.')
setTimeout(function () {
	console.log('Loading..')
}, 1000)

setTimeout(function () {
	console.log('Loading...')
}, 2000)

setTimeout(function () {
	console.log('Loading....')
}, 3000)

setTimeout(function () {
	console.log('RPC Good ! By Zarow™#3936')
}, 5000)
