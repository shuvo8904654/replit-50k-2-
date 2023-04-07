module.exports.config = {
	name: "6mui",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VĐT&NTH với sự Sp của DũngUwU",
	description: "Random ảnh 6muicó phí",
	commandCategory: "18+",
	usages: "6mui",
	cooldowns: 5
};

module.exports.run = async ({ api, event, Currencies }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	var money = (await Currencies.getData(event.senderID)).money
	if (money >= 5000) {
		axios.get('https://api-sang.nvscute.repl.co/getLink1').then(res => {
		var callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + '/cache/6mui.jpg')
					}, event.threadID,(err, info) => setTimeout(() => api.unsendMessage(info.messageID), 20000), event.messageID, () => fs.unlinkSync(__dirname + '/cache/6mui.jpg'), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + '/cache/6mui.jpg')).on("close", callback);
				Currencies.setData(event.senderID, options = {money: money - 5000})
			})
	} else return api.sendMessage("[𝐕𝐒🐥] 𝘽𝙖̣𝙣 𝙘𝙖̂̀𝙣 𝟱𝟬𝟬𝟬💵 𝙙𝙚̂̉ 𝙣𝙜𝙝𝙞𝙚̣̂𝙣 𝙣𝙜𝙖̣̂𝙥",event.threadID,event.messageID);
}
 