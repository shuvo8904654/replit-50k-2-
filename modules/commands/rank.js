const axios = require("axios")
const fs = require("fs")
const joinTime = __dirname + "/cache/timeJoin.json"

module.exports.config = {
    name: "rank",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie", //them rank
    description: "Check tương tác các thành viên trong 1 nhóm",
    commandCategory: "Box chat",
    usages: "[tag/reply/all/all number/all box]",
    cooldowns: 5
};
module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = require('fs-extra');
    const { resolve } = require("path");
    const pathA = require('path');
    const path = pathA.join(__dirname, 'cache', 'checktt.json');
    if (!existsSync(path)) {
        const obj = []
        writeFileSync(path, JSON.stringify(obj, null, 4));
    }
}
module.exports.handleEvent = async({ event, Users }) => {
    const { threadID, senderID, body } = event;
    const fs = require("fs");
    const pathA = require('path');
    const thread = require('./cache/checktt.json');
    const path = pathA.join(__dirname, 'cache', 'checktt.json');
    if(event.isGroup == false) return;
    if (thread.some(i => i.threadID == threadID) == false) {
        const data = [];
        for (let user of event.participantIDs) {
            var name = (await Users.getData(user)).name;
            var id = user;
            var exp = 0;
            if(name !== undefined && name != 'Người dùng Facebook') {
                data.push({ name, id , exp })
            }
        }
        thread.push({ threadID, data: data });
        fs.writeFileSync(path, JSON.stringify(thread, null, 2));
    }
    else {
        var threadData = thread.find(i => i.threadID == threadID && i.threadID !== undefined)
        if (threadData.data.some(i => i.id == senderID) == false) {
            var name = (await Users.getData(senderID)).name;
            var id = senderID;
            var exp = 0;
            threadData.data.push({ name, id, exp });
            fs.writeFileSync(path, JSON.stringify(thread, null, 2));
        }
        else {
            var userData = threadData.data.find(i => i.id == senderID);
            userData.exp = userData.exp + 1;
            fs.writeFileSync(path, JSON.stringify(thread, null, 2));
        }
    }
}
module.exports.run = async function ({ args, api, event }) {
    const { threadID, senderID, messageID, type, mentions, body } = event;
    let check_joinTime = JSON.parse(fs.readFileSync(joinTime));
    var mention = Object.keys(mentions);
    const thread = require('./cache/checktt.json');
    const data = thread.find(i => i.threadID == threadID)
    if (args[0] == "all") {
  let os = (await axios.get(`https://6821df2e-d4cb-44c6-abb3-185e21d7d2fb.id.repl.co/check_rank_img?xp=0&api_key=keytest`)).data
arr=os.xp

  function CheckRank(input) {
  if (input >= arr[0]) rank = "Đồng"
   if (input >= arr[1]) rank = "Bạc"
   if (input >= arr[2]) rank = "Vàng"
   if (input >= arr[3]) rank = "Bạch Kim"
   if (input >= arr[4]) rank = "Kim Cương"
  if (input >= arr[5]) rank = "Tinh Anh"
  if (input >= arr[6]) rank = "Cao Thủ"
  if (input >= arr[7]) rank = "Chiến Tướng"
  if (input >= arr[8]) rank = "Thách Đấu"
   if (input >= arr[9]) rank = "Bậc Ông Nội"
return rank
        }
        var msg = "", exp = [], i = 1, count = 0
        for(const user of data.data) {
            exp.push({ name: user.name, exp: user.exp, id: user.id });
        }
        exp.sort(function (a, b) { return b.exp - a.exp });
        var limit = args[2] || 20;
        var page = 1;
            page = parseInt(args[1]) || 1;
            page < -1 ? page = 1 : "";
            var msg = "[====KIỂM TRA TƯƠNG TÁC===]\n\n";
            var numPage = Math.ceil(exp.length/limit);
            for(var i = limit*(page - 1); i < limit*(page-1) + limit; i++){
                if(i >= exp.length) break;
                let dataInfo = exp[i];
                msg += `[${i+1}]: ${dataInfo.name}: ${dataInfo.exp} tin nhắn\n • 𝐑𝐚𝐧𝐤: ${CheckRank(dataInfo.exp)}\n`
            }
            msg += `\n--Trang ${page}/${numPage}--\nDùng ${global.config.PREFIX}checktt số trang`
            return api.sendMessage(msg, threadID, messageID);
    }
    else 
        if(type == "message_reply") { mention[0] = event.messageReply.senderID }
        if (mention[0]) {
            var exp = [], count = 0
            for(const user of data.data) {
                count += user.exp
                exp.push({ name: user.name, exp: user.exp, id: user.id });
            }
            exp.sort(function (a, b) { return b.exp - a.exp });
            const rank = exp.findIndex(i => i.id == mention[0])
            let os = (await axios.get(`https://6821df2e-d4cb-44c6-abb3-185e21d7d2fb.id.repl.co/check_rank_img?xp=${exp[rank].exp}&api_key=keytest`)).data
       return api.sendMessage({body: `=== ${exp[rank].name} ===\n\n➣ Số tin nhắn: ${exp[rank].exp}\n➣ Tỉ lệ tương tác: ${(exp[rank].exp/count*100).toFixed(0)}%\n\n➣ Xếp hạng:\n • Mức rank: ${os.rank}\n • Top: ${rank + 1}\n\n➣ Ngày gia nhập:\n • ${check_joinTime[senderID+threadID].gio}\n • ${check_joinTime[senderID+threadID].burh}`, attachment: await DownLoad(os.url)}, threadID, messageID);
        }
    else {
        var exp = [], count = 0
        for(const user of data.data) {
            count += user.exp
            exp.push({ name: user.name, exp: user.exp, id: user.id });
        }
        exp.sort(function (a, b) { return b.exp - a.exp });
        const rank = exp.findIndex(i => i.id == senderID);
        const os = await axios.get(encodeURI(`https://6821df2e-d4cb-44c6-abb3-185e21d7d2fb.id.repl.co/check_rank_img?xp=${exp[rank].exp}&api_key=keytest`))
       return api.sendMessage({body: `=== ${exp[rank].name} ===\n\n➣ Số tin nhắn: ${exp[rank].exp}\n➣ Tỉ lệ tương tác: ${(exp[rank].exp/count*100).toFixed(0)}%\n\n➣ Xếp hạng:\n • Mức rank: ${os.data.rank}\n • Top: ${rank + 1}\n\n➣ Ngày gia nhập:\n • ${check_joinTime[senderID+threadID].gio}\n • ${check_joinTime[senderID+threadID].burh}`, attachment: await DownLoad(os.data.url)}, threadID, messageID);
    }
 }
 async function DownLoad(url) {
    return (await axios.get(url, {
        responseType: "stream"
    })).data
                             }