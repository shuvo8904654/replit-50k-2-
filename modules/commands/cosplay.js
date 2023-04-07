module.exports.config = {
	name: "cosplay",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Xem ảnh gái xinh cosplay",
	commandCategory: "Random-IMG",
	usages: "cosplay",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://apituandz1407.herokuapp.com/api/cosplay.php').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						body: `=== 『 𝗖𝗢𝗦𝗣𝗟𝗔𝗬 』 ====\n━━━━━━━━━━━━━━━━━━\n\n→ 𝐂𝐨𝐬𝐩𝐥𝐚𝐲 𝐭𝐫𝐚̂́𝐭 𝐧𝐡𝐮̛ 𝐧𝐮̛𝐨̛́𝐜 𝐜𝐚̂́𝐭 𝐧𝐮𝐨̂𝐧𝐧𝐧 ><\n→ 𝗦𝗼̂́ 𝗮̉𝗻𝗵: 165`,
						attachment: fs.createReadStream(__dirname + `/cache/wibu.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/wibu.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/wibu.${ext}`)).on("close", callback);
			})
}