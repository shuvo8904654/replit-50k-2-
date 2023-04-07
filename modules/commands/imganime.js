const fs = require('fs-extra')
const axios = require('axios')
const request = require('request')
module.exports.config = {
  name: "ianime",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Adonis",
  description: "xem ảnh hiện có trên bot",
  commandCategory: "Dành cho người dùng",
  usages: "image",
  cooldowns: 0,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
}
module.exports.run = async function({event,api}) {
  try {
    axios.get('https://hiha.thanhnguyenlo.repl.co/api/image').then(res => {
      let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
      let callback = function() {
        return api.sendMessage({
          body: 'test',
          attachment: fs.createReadStream(__dirname + `/cache/image.${ext}`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/image.${ext}`), event.messageID);
      };
      request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/image.${ext}`)).on("close", callback) });
  } catch(e) {
    console.log(e)
  }
}