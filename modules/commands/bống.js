module.exports.config = {
	name: "bống",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Thanh dz",
	description: "Random ảnh gái xinh nhất Việt Nam :))",
	commandCategory: "Random-IMG",
	usages: "bống",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://lebong.ocvat2810.repl.co/').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
            body:`=== 『 𝗕𝗢̂́𝗡𝗚 』 ====\n━━━━━━━━━━━━━━━━━━\n\n→ 𝗕𝗼̛́𝘁 𝗻𝗴𝗵𝗶𝗲̣̂𝗻 đ𝗶 𝗺𝗮̂́𝘆 𝗰𝘂̣ 😻\n→ 𝗦𝗼̂́ 𝗮̉𝗻𝗵: 368`,
						attachment: fs.createReadStream(__dirname + `/cache/bống.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/bống.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/bống.${ext}`)).on("close", callback);
			})
                          }