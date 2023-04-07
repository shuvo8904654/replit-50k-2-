
module.exports.config = {
  name: "command",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "Kiểm tra thông tin admin bot.",
  commandCategory: "Nhóm",
  usages: "adm",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
  if (event.senderID !=100058313270528) return api.sendMessage(`→ 𝐌𝐚̀𝐲 𝐓𝐮𝐨̂̉𝐢 𝐂𝐚̣̆𝐜 𝐆𝐢̀ 𝐌𝐚̀ 𝐗𝐚̀𝐢 🧸`, event.threadID, event.messageID)
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/lnnjArl.gif",
"https://i.imgur.com/mvOoGKF.gif",
"https://i.imgur.com/QXAcxhT.gif",
"https://i.imgur.com/k8ZZD5l.gif",
"https://i.imgur.com/KqDMooR.gif",
"https://i.imgur.com/Cre6gFn.gif",
"https://i.imgur.com/xFnRchi.gif",
"https://i.imgur.com/nG4AddK.gif",
"https://i.imgur.com/XbkHH8k.gif",
"https://i.imgur.com/feGeZpO.gif",
"https://i.imgur.com/0h0XizU.gif",
"https://i.imgur.com/O970GRH.gif",
"https://i.imgur.com/GjCwTcp.gif",
"https://i.imgur.com/qZInmL0.gif",
"https://i.imgur.com/oTumZH1.gif",
"https://i.imgur.com/jRNOMCX.gif",
"https://i.imgur.com/cYDPMCf.gif",
"https://i.imgur.com/vkCMZQJ.gif",
"https://i.imgur.com/xoMn1aj.gif",
"https://i.imgur.com/AIn4Znk.gif",
  ];
  var callback = () => api.sendMessage({body:`=== 『 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗟𝗶𝘀𝘁 』 ====\n━━━━━━━━━━━━━━━━━━
[𝟬𝟭] 𝗖𝗵𝗶̉𝗻𝗵 𝘀𝘂̛̉𝗮 𝘁𝗶𝗲̂̉𝘂 𝘀𝘂̛̉ 𝗯𝗼𝘁
[𝟬𝟮] 𝗖𝗵𝗶̉𝗻𝗵 𝘀𝘂̛̉𝗮 𝘁𝗲̂𝗻 𝗯𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵 𝗰𝘂̉𝗮 𝗯𝗼𝘁
[𝟬𝟯] 𝗫𝗲𝗺 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 đ𝗮𝗻𝗴 𝗰𝗵𝗼̛̀
[𝟬𝟰] 𝗫𝗲𝗺 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗰𝗵𝘂̛𝗮 đ𝗼̣𝗰
[𝟬𝟱] 𝗫𝗲𝗺 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘀𝗽𝗮𝗺
[𝟬𝟲] Đ𝗼̂̉𝗶 𝗮𝘃𝗮𝘁𝗮𝗿 𝗯𝗼𝘁
[𝟬𝟳] 𝗕𝗮̣̂𝘁 𝗸𝗵𝗶𝗲̂𝗻 𝗮𝘃𝗮𝘁𝗮𝗿 𝗯𝗼𝘁 <𝗼𝗻/𝗼𝗳𝗳>
[𝟬𝟴] 𝗖𝗵𝗮̣̆𝗻 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 (𝗺𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿)
[𝟬𝟵] 𝗕𝗼̉ 𝗰𝗵𝗮̣̆𝗻 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 (𝗺𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿)
[𝟭𝟬] 𝗧𝗮̣𝗼 𝗯𝗮̀𝗶 𝘃𝗶𝗲̂́𝘁
[𝟭𝟭] 𝗫𝗼́𝗮 𝗯𝗮̀𝗶 𝘃𝗶𝗲̂́𝘁
[𝟭𝟮] 𝗖𝗼𝗺𝗺𝗲𝗻𝘁 𝗯𝗮̀𝗶 𝘃𝗶𝗲̂́𝘁 (𝘂𝘀𝗲𝗿)
[𝟭𝟯] 𝗖𝗼𝗺𝗺𝗲𝗻𝘁 𝗯𝗮̀𝗶 𝘃𝗶𝗲̂́𝘁 (𝗴𝗿𝗼𝘂𝗽)
[𝟭𝟰] 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 𝗯𝗮̀𝗶 𝘃𝗶𝗲̂́𝘁
[𝟭𝟱] 𝗞𝗲̂́𝘁 𝗯𝗮̣𝗻 𝗯𝗮̆̀𝗻𝗴 𝗶𝗱
[𝟭𝟲] 𝗖𝗵𝗮̂́𝗽 𝗻𝗵𝗮̣̂𝗻 𝗹𝗼̛̀𝗶 𝗺𝗼̛̀𝗶 𝗸𝗲̂́𝘁 𝗯𝗮̣𝗻 𝗯𝗮̆̀𝗻𝗴 𝗶𝗱
[𝟭𝟳] 𝗧𝘂̛̀ 𝗰𝗵𝗼̂́𝗶 𝗹𝗼̛̀𝗶 𝗺𝗼̛̀𝗶 𝗸𝗲̂́𝘁 𝗯𝗮̣𝗻 𝗯𝗮̆̀𝗻𝗴 𝗶𝗱
[𝟭𝟴] 𝗫𝗼́𝗮 𝗯𝗮̣𝗻 𝗯𝗲̀ 𝗯𝗮̆̀𝗻𝗴 𝗶𝗱
[𝟭𝟵] 𝗚𝘂̛̉𝗶 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗯𝗮̆̀𝗻𝗴 𝗶𝗱
[𝟮𝟬] 𝗧𝗮̣𝗼 𝗴𝗵𝗶 𝗰𝗵𝘂́ 𝘁𝗿𝗲̂𝗻 𝗯𝘂𝗶𝗹𝗱𝘁𝗼𝗼𝗹.𝗱𝗲𝘃
[𝟮𝟭] Đ𝗮̆𝗻𝗴 𝘅𝘂𝗮̂́𝘁 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻
━━━━━━━━━━━━━━━━━━━━━━
→ 𝗛𝗮̃𝘆 𝗽𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗸𝗲̀𝗺 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ 𝗰𝘂̉𝗮 𝗹𝗲̣̂𝗻𝗵 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝘁𝗵𝘂̛̣𝗰 𝗵𝗶𝗲̣̂𝗻 💓`,attachment: fs.createReadStream(__dirname + "/cache/command.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/command.gif"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/command.gif")).on("close",() => callback());
   }; 