module.exports.config = {
	name: "seachdatefb",
	version: "1.0.7",
	hasPermssion: 2,
	credits: "M-Drasew",
	description: "Tìm ngày giờ tạo nick facebook",
	commandCategory: "Info",
	usages: "seachdatefb id",
	cooldowns: 5
};
module.exports.run = async ({ api, event, args }) =>
{
  const axios = require("axios");
  if (!args[0]) return api.sendMessage("Vui lòng nhập id cần tìm", event.threadID, event.messageID);
  const res = await axios.get(`https://golike.com.vn/func-api.php?user=${args.join(" ")}`);
  if (res.status == 200) {
  const finduid = res.data.data.uid
  const finddate = res.data.data.date
  return api.sendMessage(`Id: ${finduid}\nNgày tạo:${finddate}`, event.threadID, event.messageID);
  }
  else {
    return api.sendMessage(`[ #224 ] - Lỗi`, event.threadID, event.messageID);
  }
}