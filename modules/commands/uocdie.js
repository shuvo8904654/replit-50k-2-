const fs = require("fs");
module.exports.config = {
name: "uocdie",
  version: "1.0.1",
  hasPermssion: 2,
  credits: "Be Van Luc",
  description: "Ước die",
  commandCategory: "Không cần dấu lệnh",
  usages: "noprefix",
  cooldowns: 0,
};
module.exports.handleEvent = function({ api, event }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Ước die")==0 || (event.body.indexOf("ước die")==0)) {
    var msg = {
        body: "𝙐̛𝙤̛́𝙘 𝘿𝙞𝙚 𝘾𝙖́𝙞 𝙇𝙤̂̀𝙣 𝙈𝙚̣ 𝙈𝙖̀𝙮 !",
        attachment: fs.createReadStream(__dirname + `/noprefix/uocdie.mp4`)
      }
      return api.sendMessage(msg, threadID, messageID);
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }