const fs = require("fs");
module.exports.config = {
name: "adu",
  version: "1.0.1",
  hasPermssion: 2,
  credits: "VanHung",
  description: "adu",
  commandCategory: "Không cần dấu lệnh",
  usages: "noprefix",
  cooldowns: 0,
};
module.exports.handleEvent = function({ api, event }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Lực")==0 || (event.body.indexOf("Bvl")==0)) {
    var msg = {
        body: "𝐃𝐚̂𝐲 𝐋𝐚̀ 𝐀𝐝𝐦𝐢𝐧 𝐁𝐨𝐭",
        attachment: fs.createReadStream(__dirname + `/noprefix/bvl.mp4`)
      }
      return api.sendMessage(msg, threadID, messageID);
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }