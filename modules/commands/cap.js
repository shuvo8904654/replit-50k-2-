 const axios = require("axios");
const fs = require("fs");
module.exports.config = {
    name: "cap",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Thiệu Trung Kiên",
    description: "Chụp ảnh profile của người dùng",
    commandCategory: "THÀNH VIÊN",
    usages: "",
    cooldowns: 5
}
module.exports.handleEvent = async ({ api, event, Threads, args, Users }) => {
  try{
  if(event.body.toLowerCase() == "cap"){
    let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
    api.sendMessage({body: `→ đ𝗼̛̣𝗶 𝘁𝗶́ 𝗻𝗵𝗮 ${name} 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗰𝗮𝗽`, mentions}, event.threadID, event.messageID);
    if (event.type == "message_reply") {
      var uid = event.messageReply.senderID;
    } else if (Object.keys(event.mentions).length == 1) {
      var uid = Object.keys(event.mentions)[0];
    }
  else {
          var uid = event.senderID;
    }
    var cookies = `datr=Bz9iY1ycvPDshG8ko4AiLPSA;sb=Bz9iYycrqeYVfQxS8nSkSrfX;vpd=v1%3B764x393x2.75;dpr=2.75;locale=vi_VN;c_user=100004044003276;xs=24%3AbOZb6Dr902knKw%3A2%3A1671027817%3A-1%3A10652;fbl_st=101435228%3BT%3A27850463;fbl_cs=AhAJ1GQ0g4jXXYQslV0HjRW2GE9BT2FlUzRpa1ZRcDlxYWwrZVFnPWE3eg;fbl_ci=3218696328441238;fr=0d9xGmPvS9CGvThHd.AWV7sFJVCV7tnZJxC-5xvoyi2fA.BjYkA8.qU.AAA.0.0.Bjmd9Q.AWWbWhw0fsg;m_page_voice=100004044003276;m_pixel_ratio=2.75;wd=393x764;`,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = `datr=Bz9iY1ycvPDshG8ko4AiLPSA;sb=Bz9iYycrqeYVfQxS8nSkSrfX;vpd=v1%3B764x393x2.75;dpr=2.75;locale=vi_VN;c_user=100004044003276;xs=24%3AbOZb6Dr902knKw%3A2%3A1671027817%3A-1%3A10652;fbl_st=101435228%3BT%3A27850463;fbl_cs=AhAJ1GQ0g4jXXYQslV0HjRW2GE9BT2FlUzRpa1ZRcDlxYWwrZVFnPWE3eg;fbl_ci=3218696328441238;fr=0d9xGmPvS9CGvThHd.AWV7sFJVCV7tnZJxC-5xvoyi2fA.BjYkA8.qU.AAA.0.0.Bjmd9Q.AWWbWhw0fsg;m_page_voice=100004044003276;m_pixel_ratio=2.75;wd=393x764;`;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`api-vip.procyrus.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `https://api.screenshotmachine.com/?key=462ce0&url=${url}&dimension=1920x1080`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({body: `====『 𝗖𝗔𝗣 𝗪𝗔𝗟𝗟 』====\n━━━━━━━━━━━━━━━━\n💞 𝗮̂𝘆 𝗱𝗼̂ 𝗯𝗼𝘁 𝗰𝗮𝗽 𝘅𝗼𝗻𝗴 𝗿𝗼̂̀𝗶 𝗻𝗲̀ ${name}\n→ 𝘁𝗶́𝗻𝗵 𝗻𝗮̆𝗻𝗴 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝗰𝗮𝗽 𝘄𝗮𝗹𝗹 𝗸𝗵𝗶 𝗽𝗵𝗮́𝘁 𝗵𝗶𝗲̣̂𝗻 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗰𝗮𝗽`,mentions, attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
  }
} catch(e){
    console.log(e)
}}
module.exports.run = async function ({ api,Users,event, args }) {
  let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
    api.sendMessage({body: `→ đ𝗼̛̣𝗶 𝘁𝗶́ 𝗻𝗵𝗮 ${name} 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗰𝗮𝗽`,mentions}, event.threadID, event.messageID);
    var uid = String(args[0]);
    isNaN(uid) && (uid = Object.keys(event.mentions)[0], "message_reply" == event.type ? uid = event.messageReply.senderID : uid = event.senderID);
    var cookies = `datr=Bz9iY1ycvPDshG8ko4AiLPSA;sb=Bz9iYycrqeYVfQxS8nSkSrfX;vpd=v1%3B764x393x2.75;dpr=2.75;locale=vi_VN;c_user=100004044003276;xs=24%3AbOZb6Dr902knKw%3A2%3A1671027817%3A-1%3A10652;fbl_st=101435228%3BT%3A27850463;fbl_cs=AhAJ1GQ0g4jXXYQslV0HjRW2GE9BT2FlUzRpa1ZRcDlxYWwrZVFnPWE3eg;fbl_ci=3218696328441238;fr=0d9xGmPvS9CGvThHd.AWV7sFJVCV7tnZJxC-5xvoyi2fA.BjYkA8.qU.AAA.0.0.Bjmd9Q.AWWbWhw0fsg;m_page_voice=100004044003276;m_pixel_ratio=2.75;wd=393x764;`,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = `datr=Bz9iY1ycvPDshG8ko4AiLPSA;sb=Bz9iYycrqeYVfQxS8nSkSrfX;vpd=v1%3B764x393x2.75;dpr=2.75;locale=vi_VN;c_user=100004044003276;xs=24%3AbOZb6Dr902knKw%3A2%3A1671027817%3A-1%3A10652;fbl_st=101435228%3BT%3A27850463;fbl_cs=AhAJ1GQ0g4jXXYQslV0HjRW2GE9BT2FlUzRpa1ZRcDlxYWwrZVFnPWE3eg;fbl_ci=3218696328441238;fr=0d9xGmPvS9CGvThHd.AWV7sFJVCV7tnZJxC-5xvoyi2fA.BjYkA8.qU.AAA.0.0.Bjmd9Q.AWWbWhw0fsg;m_page_voice=100004044003276;m_pixel_ratio=2.75;wd=393x764;`;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`api-vip.procyrus.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `https://api.screenshotmachine.com/?key=462ce0&url=${url}&dimension=1920x1080`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({body: `====『 𝗖𝗔𝗣 𝗪𝗔𝗟𝗟 』====\n━━━━━━━━━━━━━━━━\n💞 𝗮̂𝘆 𝗱𝗼̂ 𝗯𝗼𝘁 𝗰𝗮𝗽 𝘅𝗼𝗻𝗴 𝗿𝗼̂̀𝗶 𝗻𝗲̀ ${name}`,mentions, attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
}