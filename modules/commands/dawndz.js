module.exports.config = {
  name: "dawndz",
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
"https://i.imgur.com/fp7uZV6.mp4"
];
  var callback = () => api.sendMessage({body:`=== [ 𝗗𝗔𝗪𝗡𝗗𝗭 ] ====\n━━━━━━━━━━━━━━━━━━\n
🐧 𝐓𝐞̂𝐧: 𝐕𝐨̃ 𝐍𝐡𝐚̣̂𝐭 𝐇𝐨𝐚̀𝐧𝐠
🕊 𝐓𝐮𝐨̂̉𝐢: 𝟏𝟕
🐌 𝐆𝐢𝐨̛́𝐢 𝐓𝐢́𝐧𝐡: 𝐍𝐚𝐦
💤 𝐒𝐢𝐧𝐡 𝐍𝐠𝐚̀𝐲: 𝟐𝟎/𝟎𝟗/𝟐𝟎𝟎𝟔
🐾 𝐂𝐡𝐢𝐞̂̀𝐮 𝐂𝐚𝐨 & 𝐂𝐚̂𝐧 𝐍𝐚̣̆𝐧𝐠: 𝟏𝐦𝟕𝐱 / 𝟓𝟎𝐤𝐠
🙈 𝐌𝐨̂́𝐢 𝐐𝐮𝐚𝐧 𝐇𝐞̣̂: 𝐇𝐞̣𝐧 𝐇𝐨̀
🐛 𝐐𝐮𝐞̂ 𝐐𝐮𝐚́𝐧: 𝐇𝐮𝐞̂́
🦢 𝐍𝐨̛𝐢 𝐎̛̉: 𝐇𝐮𝐞̂́
🦚 𝐂𝐮𝐧𝐠: 𝐗𝐮̛́ 𝐍𝐮̛̃
🌷 𝐆𝐮: 𝐍𝐡𝐮̛ 𝐇𝐚̀ 𝐕𝐢 𝐋𝐚̀ Đ𝐮̛𝐨̛̣𝐜
🦋 𝐓𝐢́𝐧𝐡 𝐂𝐚́𝐜𝐡: 𝐓𝐫𝐚̂̀𝐦 , 𝐈́𝐭 𝐍𝐨́𝐢
🛸 𝐒𝐨̛̉ 𝐓𝐡𝐢́𝐜𝐡: Đ𝐚́ 𝐁𝐨́𝐧𝐠 , 𝐂𝐡𝐨̛𝐢 𝐆𝐚𝐦𝐞 , 𝐂𝐨𝐢 𝐏𝐡𝐢𝐦 𝐌𝐚 , 𝐛𝐥𝐚𝐛𝐥𝐚
🌐 𝐌𝐱𝐡 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤: https://facebook.com/100059953981036`,attachment: fs.createReadStream(__dirname + "/cache/ad.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ad.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/ad.mp4")).on("close",() => callback());
   };
   //tự edit body nhá ...=thay thông tin 
   //Sen code lại th nên bớt soi 
   //cách lấy ảnh gắn ở trên 
   //B1 Truy cập https://imgur.com chọn newpost
   //B2 Gắn ảnh từ máy tính lên đó hay điện thoại cx đc tùyq   //B3 Copy link như trên rồi thêm .jpg vào là done 
   //Chúc thành công