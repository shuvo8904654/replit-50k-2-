module.exports.config = {
	name: "off",
	version: "1.0.0",
	hasPermssion: 3,
	credits: "Des Bủh - Dựa trên demo của manhIT", /* vui lòng k sửa credit :) */
	description: "Tắt Bot",
	commandCategory: "Hệ thống",
	cooldowns: 0
        };
        
module.exports.run = async({event, api}) =>{

   const permission = ["100058313270528", ""];
    if (!permission.includes(event.senderID)) return api.sendMessage("Xin cái tuổi để off?", event.threadID, event.messageID);

api.sendMessage("Tao Sủi Đây Pai Các Mày! ",event.threadID, () =>process.exit(0))}