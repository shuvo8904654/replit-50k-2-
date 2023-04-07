module.exports.config = {
  name: "goku",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Tiadals với api của Kadeer",//mod lại by NYL
  description: "goku",
  commandCategory: "người dùng",
  usages: "",
  cooldowns: 5
};
module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://api-goku.qwertyuiop113.repl.co').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `🐇Goku nè🍀`,
            attachment: fs.createReadStream(__dirname + `/cache/chitanda.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/chitanda.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/chitanda.${ext}`)).on("close", callback);
      })
}