module.exports.config = {
	name: "u",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "tpk", 
	description: "",
	commandCategory: "Tiện ích",
	usages: "",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  const moment = require("moment-timezone");
  const tow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
	var { threadID, messageID } = event;
	if (event.body.indexOf("prefix")==0 ||
 (event.body.indexOf("lệnh gì","Dùng sao","Lệnh bot là gì vậy","dawn","Nhhoang")==0)) {    
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
    const { commands } = global.client;
  axios.get('https://Gifbydawn.vnhoang06.repl.co/gif').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `[🌟] → 𝗣𝗿𝗲𝗳𝗶𝘅 𝗰𝘂̉𝗮 𝗯𝗼𝘁 𝗹𝗮̀ [${global.config.PREFIX}]`,
            attachment: fs.createReadStream(__dirname + `/noprefix/remix.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/noprefix/remix.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/noprefix/remix.${ext}`)).on("close", callback);
      })}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

                                                                                                                                                                                                                                                                                                                                              }