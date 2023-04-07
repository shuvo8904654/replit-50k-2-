module.exports.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "✨..✨",
  description: "Kiểm tra thông tin admin .",
  commandCategory: "Tiện ích",
  usages: "adm",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
    var name = (await Users.getData(event.senderID)).name
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/K2YCQOp.mp4",
"https://i.imgur.com/lqyaRGL.mp4",
"https://i.imgur.com/6LtOy2f.mp4",
"https://i.imgur.com/V9qhftN.mp4",
"https://i.imgur.com/luw748o.mp4",
"https://i.imgur.com/0RgD0zJ.mp4",
"https://i.imgur.com/31oWDgf.mp4",
"https://i.imgur.com/sGuHy1x.mp4",
"https://i.imgur.com/B5GDyPa.mp4",
"https://i.imgur.com/9iSu9aa.mp4",
"https://i.imgur.com/S3Srowd.mp4",
"https://i.imgur.com/krBQTNU.mp4",
"https://i.imgur.com/fpcLYvM.mp4",
"https://i.imgur.com/KWJyaS5.mp4",
"https://i.imgur.com/hzf94GY.mp4",
"https://i.imgur.com/hymqN5u.mp4",
];
  var callback = () => api.sendMessage({body:`━━━━━━━━━━━━━━━━━━
=== [ 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧 ] ===
━━━━━━━━━━━━━━━━━━
👤 𝗧𝗲̂𝗻: Bạc Cầm Khánh Duy
🎟️ 𝗕𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵: BCKD-𝐓𝐋𝐂𝐀𝐑-𝐁𝐎𝐓
🌹  𝗧𝘂𝗼̂̉𝗶: 13+
👫 𝗚𝗶𝗼̛́𝗶 𝘁𝗶́𝗻𝗵: 𝗡𝗮𝗺
🗓️ 𝗦𝗶𝗻𝗵 𝗻𝗴𝗮̀𝘆: 20-06-2009
🌟 𝗖𝗵𝗶𝗲̂̀𝘂 𝗰𝗮𝗼: 𝟭𝗺60
💓 𝗠𝗼̂́𝗶 𝗾𝘂𝗮𝗻 𝗵𝗲̣̂: 𝐇𝐞̣𝐧 𝐇𝐨̀
🎊 𝗤𝘂𝗲̂ 𝗾𝘂𝗮́𝗻: Sơn La
🏠 𝗡𝗼̛𝗶 𝗼̛̉: Sơn La
💞 𝗖𝘂𝗻𝗴: Song Tử
💐 𝗚𝘂: 𝐊𝐨 𝐜𝐚̂̀𝐧 𝐩𝐡𝐚̉𝐢 𝐗𝐢𝐧𝐡 𝐥𝐚̆́𝐦,𝐃𝐞𝐭𝐡𝐰𝐰 𝐂𝐮𝐭𝐢,𝐓𝐡𝐚̣̂𝐭 𝐓𝐡𝐚̀...
🎀 𝗧𝗶́𝗻𝗵 𝗰𝗮́𝗰𝗵: Bình Thường
💻𝗖𝗼𝗻𝘁𝗮𝗰𝘁💻
🎭 𝗭𝗮𝗹𝗼: 0398038618
🌐 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: https://www.facebook.com/kduydepzai
━━━━━━━━━━━━━━━━━━
 [👇] 𝗟𝘂̛𝘂 𝘆́ 𝗰𝗵𝗼 𝗰𝗮́𝗰 𝗾𝘁𝘃 𝘃𝗮̀ 𝘁𝘃 𝘁𝗿𝗼𝗻𝗴 𝗯𝗼𝘅: 
➝ 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗸𝗵𝗼̂𝗻𝗴 𝘀𝗽𝗮𝗺 𝗸𝗵𝗶 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 đ𝗲̂̉ 𝘁𝗿𝗮́𝗻𝗵 𝗱𝗶𝗲 𝗯𝗼𝘁
➝ 𝗞𝗵𝗼̂𝗻𝗴 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗻𝗵𝗶𝗲̂̀𝘂 𝗰𝘂̉𝗮 𝗹𝗲̣̂𝗻𝗵 đ𝗼́
➝ đ𝘂̛̀𝗻𝗴 𝗰𝗵𝘂̛̉𝗶 𝗯𝗼𝘁 𝘃𝗶̀ 𝗻𝗼́ đ𝘂̛𝗼̛̣𝗰 𝗹𝗮̣̂𝗽 𝘁𝗿𝗶̀𝗻𝗵 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝗿𝗼̛̀𝗶 𝗯𝗼𝘅
➝ đ𝘂̛̀𝗻𝗴 𝗿𝗲𝗽𝗼𝗿𝘁 𝗯𝗼𝘁 𝘃𝗶̀ 𝗻𝗼́ 𝗰𝘂𝘁𝗲 𝗹𝗮̆́𝗺 ><
➝ 𝗡𝗲̂́𝘂 𝗯𝗼𝘁 𝗸𝗼 𝗵𝗼𝗮̣𝘁 đ𝗼̣̂𝗻𝗴 𝗵𝗮𝘆 𝗯𝗶̣ 𝗹𝗼̂̃𝗶 𝗵𝗮𝘆 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝗾𝘂𝗮 𝘀𝗱𝘁 𝗵𝗼𝗮̣̆𝗰 𝗻𝗵𝗮̆́𝗻 𝘁𝗶𝗻 𝗺𝗲𝘀𝘀 đ𝗲̂̉ đ𝘂̛𝗼̛̣𝗰 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝘁𝗿𝘂̛̣𝗰 𝘁𝗶𝗲̂́𝗽 𝘃𝗼̛́𝗶 𝗺𝗶̀𝗻𝗵
=> 𝗬𝗲̂𝘂 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗻𝗵𝗶𝗲̂̀𝘂 𝗹𝗮̆́𝗺 <3 𝗵𝗮̃𝘆 đ𝗼̂̀𝗻𝗴 𝗵𝗮̀𝗻𝗵 𝗰𝘂̀𝗻𝗴 𝘃𝗼̛́𝗶 𝗯𝗼𝘁 𝘃𝗮̀ 𝗺𝗶̀𝗻𝗵 𝗻𝗵𝗲́ <3`,attachment: fs.createReadStream(__dirname + "/cache/ad.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ad.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/ad.mp4")).on("close",() => callback());
   };
   //tự edit body nhá ...=thay thông tin 
   //Sen code lại th nên bớt soi 
   //cách lấy ảnh gắn ở trên 
   //B1 Truy cập https://imgur.com chọn newpost
   //B2 Gắn ảnh từ máy tính lên đó hay điện thoại cx đc tùyq   //B3 Copy link như trên rồi thêm .jpg vào là done 
   //Chúc thành công