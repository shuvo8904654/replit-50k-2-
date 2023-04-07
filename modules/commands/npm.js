module.exports.config = {
  name: "npm",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "",
  description: "",
  commandCategory: "Thông tin",
  usages: "[url site]",
  cooldowns: 5
};

module.exports.run = async (
{
  api,
  event,
  args
}) =>
{
  const axios = require('axios');
  const request = require('request');
 const fs = require("fs");
  var cc = args.join(" ");
  if (!cc) return api.sendMessage(`Nhập url site?`, event.threadID, event.messageID);
  else
  {
    axios.get(`https://api.popcat.xyz/npm?q=${encodeURIComponent(cc)}`).then(res =>
    {
      const c = res.data.author;
      const a = res.data.name;
      const b = res.data.description;
      const d = res.data.keywords;
      {
        api.sendMessage({body: `==== INFO NPM ====\n\nTên: ${a}\n\nMô Tả: ${b}\n\nKeyWords: ${d}`}, event.threadID, event.messageID);
      };
    })
  }
}