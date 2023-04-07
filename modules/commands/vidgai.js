module.exports.config = {
  name: "vidgai",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "nhhoang",
  description: "xem video vidgaitiktok",
  commandCategory: "video ",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/727GpEH.mp4", "https://i.imgur.com/DyR0LG1.mp4", "https://i.imgur.com/tMTug7j.mp4", "https://i.imgur.com/YidxDbU.mp4", "https://i.imgur.com/SQoV4df.mp4", "https://i.imgur.com/kgekWfF.mp4", "https://i.imgur.com/WTRzUS0.mp4", "https://i.imgur.com/05XTetT.mp4", "https://i.imgur.com/cDXr23S.mp4", "https://i.imgur.com/qjIeXci.mp4", "https://i.imgur.com/RGYHHRM.mp4", "https://i.imgur.com/SM1pZJL.mp4", "https://i.imgur.com/eV9IB9N.mp4", "https://i.imgur.com/O0Om6rI.mp4", "https://i.imgur.com/XTnaZaJ.mp4", "https://i.imgur.com/s6OFk18.mp4", "https://i.imgur.com/tIhc3bx.mp4", "https://i.imgur.com/EVt1b5m.mp4", "https://i.imgur.com/WErF3uV.mp4", "https://i.imgur.com/K9TbsGc.mp4", "https://i.imgur.com/Xv6CKpC.mp4", "https://i.imgur.com/mwKOgd8.mp4",
    ];
  var callback = () => api.sendMessage({body:`=== [ 𝗩𝗜𝗗𝗘𝗢 𝗚𝗔́𝗜 ] ===\n━━━━━━━━━━━━━━━━━━\n\n→ [🧸] 𝗩𝗶𝗱𝗲𝗼 𝗴𝗮́𝗶 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 đ𝐚̂𝘆\n→ [📺] 𝗦𝗼̂́ 𝘃𝗶𝗱𝗲𝗼: 22\n ━━━━━━━━━━━━━━━━━━\n\n[💓] Đ𝘂̛𝗼̛̣𝗰 𝘂𝗽𝗱𝗮𝘁𝗲 𝗯𝗼̛̉𝗶 🎀𝐙𝐞𝐮𝐬 𝐃𝐞𝐩𝐓𝐫𝐲🎀`,attachment: fs.createReadStream(__dirname + "/cache/5.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.mp4")).on("close",() => callback());
   };
 