 var request = require("request");const { readdirSync, readFileSync, writeFileSync, existsSync, copySync, createWriteStream, createReadStream } = require("fs-extra");
    module.exports.config = {
        name: "choigai",
        version: "1.0.0",
        hasPermssion: 0,
        credits: "BLACK",
        description: "Game cua gái có đặt cược",
        commandCategory: "Trò Chơi",
        usages: "<[đ𝗼̉/𝗰𝗮𝗺/𝘁𝗶́𝗺/𝘅𝗮𝗻𝗵/đ𝗲𝗻/𝘁𝗿𝗮̆́𝗻𝗴] 𝗵𝗼𝗮̣̆𝗰[❤️/🧡/💜/💙/🖤/🤍]> <𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 (𝗹𝘂̛𝘂 𝘆́ 𝗽𝗵𝗮̉𝗶 𝘁𝗿𝗲̂𝗻 𝟭𝟬𝟬$)>",
        cooldowns: 2
    };

    module.exports.onLoad = async function () {
        if (!existsSync(__dirname + '/cache/do.jpg')) {
            request('https://i.imgur.com/27cFGA7.jpg').pipe(createWriteStream(__dirname + '/cache/do.jpg'));
        }
        if (!existsSync(__dirname + '/cache/cam.jpg')) {
            request('https://i.imgur.com/q3lAZZc.jpg').pipe(createWriteStream(__dirname + '/cache/cam.jpg'));
        }
        if (!existsSync(__dirname + '/cache/tim.jpg')) {
            request('https://i.imgur.com/EWptgY1.jpg').pipe(createWriteStream(__dirname + '/cache/tim.jpg'));
        }
        if (!existsSync(__dirname + '/cache/xanh.jpg')) {
            request('https://i.imgur.com/Ty9k0nU.jpg').pipe(createWriteStream(__dirname + '/cache/xanh.jpg'));
        }
        if (!existsSync(__dirname + '/cache/den.jpg')) {
            request('https://i.imgur.com/FUloMlI.jpg').pipe(createWriteStream(__dirname + '/cache/den.jpg'));
        }
        if (!existsSync(__dirname + '/cache/trang.jpg')) {
            request('https://i.imgur.com/380RNm0.jpg').pipe(createWriteStream(__dirname + '/cache/trang.jpg'));
        }
        if (!existsSync(__dirname + '/cache/gaigu.gif')) {
            request('https://i.imgur.com/wFOKI2w.gif').pipe(createWriteStream(__dirname + '/cache/gaigu.gif'));
        }
    };

    async function get(one,two,three) {
        var x1;
            switch (one) {
                case "do": x1 = "❤️";
                    break;
                case "cam": x1 = '🧡';
                    break;
                case "tim": x1 = '💜';
                    break;
                case "xanh": x1 = '💙';
                    break;
                case "den": x1 = '🖤';
                    break;
                case "trang":x1 = '🤍';
            }
        var x2;
            switch (two) {
                case "do": x2 = "❤️";
                    break;
                case "cam": x2 = '🧡';
                    break;
                case "tim": x2 = '💜';
                    break;
                case "xanh": x2 = '💙';
                    break;
                case "den": x2 = '🖤';
                    break;
                case "trang":x2 = '🤍';
            }
        var x3;
            switch (three) {
                case "do": x3 = "❤️";
                    break;
                case "cam": x3 = '🧡';
                    break;
                case "tim": x3 = '💜';
                    break;
                case "xanh": x3 = '💙';
                    break;
                case "den": x3 = '🖤';
                    break;
                case "trang":x3 = '🤍';
            }
        var all = [x1, x2, x3];
    return full = all;
    }
var full = [];
    module.exports.run = async function({ api, event, args, Currencies }) { var out = (msg) => api.sendMessage(msg,event.threadID, event.messageID);
        const slotItems = ["do", "cam", "tim", "xanh", "den", "trang"];
            const moneyUser = (await Currencies.getData(event.senderID)).money;
                var moneyBet = parseInt(args[1]);
                    if (!args[0] || !isNaN(args[0])) return api.sendMessage("[𝗗𝗮𝘄𝗻🐧] → 𝗛𝗮̃𝘆 𝗕𝗮̂́𝗺 : /𝗰𝘂𝗮𝗴𝗮𝗶 [đ𝗼̉/𝗰𝗮𝗺/𝘁𝗶́𝗺/𝘅𝗮𝗻𝗵/đ𝗲𝗻/𝘁𝗿𝗮̆́𝗻𝗴] [𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻]",event.threadID, event.messageID);
                    if (isNaN(moneyBet) || moneyBet <= 0) return api.sendMessage("[𝗗𝗮𝘄𝗻🐧] → 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 đ𝗮̣̆𝘁 𝗰𝘂̛𝗼̛̣𝗰 𝗸𝗵𝗼̂𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 đ𝗲̂̉ 𝘁𝗿𝗼̂́𝗻𝗴 𝗵𝗼𝗮̣̆𝗰 𝗹𝗮̀ 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝐚̂𝗺 🎆", event.threadID, event.messageID);
                if (moneyBet > moneyUser) return api.sendMessage("[𝗗𝗮𝘄𝗻🐧] → 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗯𝗮̣𝗻 đ𝗮̣̆𝘁 𝗹𝗼̛́𝗻 𝗵𝗼̛𝗻 𝘀𝗼̂́ 𝗱𝘂̛ 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻! 🎆", event.threadID, event.messageID);
            if (moneyBet < 100) return api.sendMessage("[𝗗𝗮𝘄𝗻🐧] → 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 đ𝗮̣̆𝘁 𝗸𝗵𝗼̂𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 𝗱𝘂̛𝗼̛́𝗶 𝟭𝟬𝟬 đ𝗼̂!", event.threadID, event.messageID);
        var number = [], win = false;
    for (let i = 0; i < 3; i++) number[i] = slotItems[Math.floor(Math.random() * slotItems.length)];
        var itemm;
            var icon;
                switch (args[0]) {
                    case "đỏ":
                        case "Đỏ": itemm = "do";
                                icon = '❤️';
                            break;
                    case "cam": 
                        case "Cam": itemm = "cam";
                                icon = '🧡';
                            break;
                    case "tím":
                        case "Tím": itemm = "tim";
                                icon = '💜';
                            break;
                    case "xanh":
                        case "Xanh": itemm = "xanh";
                                icon = '💙';
                            break;
                    case "đen": 
                        case "Đen": itemm = "den";
                                icon = '🖤';
                            break;
                    case "trắng":
                        case "Trắng": itemm = "trang";
                                icon = '🤍';
                            break;
                                default: return api.sendMessage("[𝗗𝗮𝘄𝗻🐧] → 𝗛𝗮̃𝘆 𝗕𝗮̂́𝗺 : /𝗰𝘂𝗮𝗴𝗮𝗶 [đ𝗼̉/𝗰𝗮𝗺/𝘁𝗶́𝗺/𝘅𝗮𝗻𝗵/đ𝗲𝗻/𝘁𝗿𝗮̆́𝗻𝗴] [𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻]",event.threadID, event.messageID);
                }      
                await get(number[0],number[1],number[2]);
            api.sendMessage({body:"=== 『 Đ𝗮𝗻𝗴 𝗤𝘂𝗮𝘆 』 ====\n━━━━━━━━━━━━━━━━━━\n\n→ Đ𝗼̛̣𝗶 𝗕𝗼𝘁 𝗞𝗶́𝗺 𝗘𝗺 𝗡𝗮̀𝗼 𝗫𝗶𝗻𝗵 𝗖𝗵𝗼 𝗠𝗮̀ 𝗛𝘂́𝗽\n→ 𝗖𝗵𝘂́𝗰 𝗕𝗮̣𝗻 𝗞𝗶́𝗺 Đ𝘂̛𝗼̛̣𝗰 𝗚𝗵𝗲̣̂ Đ𝗶́𝗰 𝗕𝘂̛̣ 𝗡𝗵𝗮́ 😍",attachment: createReadStream(__dirname + "/cache/gaigu.gif")},event.threadID,async (error,info) => {
                await new Promise(resolve => setTimeout(resolve, 5 * 1000));
                    api.unsendMessage(info.messageID);
                          await new Promise(resolve => setTimeout(resolve, 100));
    var array = [number[0],number[1],number[2]];
        var listimg = [];
           for (let string of array) {
               listimg.push(createReadStream(__dirname + `/cache/${string}.jpg`));
           }
        if (array.includes(itemm)) {
            var i = 0;
                if (array[0] == itemm) i+=1;
                    if (array[1] == itemm) i+=1;
                if (array[2] == itemm) i+=1;
            if (i == 1) {
                var mon = parseInt(args[1]) + 300;  
                    await Currencies.increaseMoney(event.senderID, mon); console.log("s1")
                        return api.sendMessage({body:`=== 『 𝗬𝗢𝗨 𝗪𝗜𝗡 』 ====\n━━━━━━━━━━━━━━━━━━\n\n→ 𝗤𝘂𝗮𝘆 𝗧𝗿𝘂́𝗻𝗴: ${full.join(" | ")}\n→ 𝗕𝗮̣𝗻 𝗩𝘂̛̀𝗮 𝗖𝘂𝗮 Đ𝘂̛𝗼̛̣𝗰 𝗠𝗼̣̂𝘁 𝗘𝗺 𝗩𝗮̀ 𝗠𝗮𝗻𝗴 𝗩𝗲̂̀ 𝗟𝗮̀𝗺 𝗖𝗼𝗻 𝗗𝐚̂𝘂 𝗖𝘂̉𝗮 𝗠𝗲̣ 😍\n→ 𝗖𝗼̣̂𝗻𝗴 ${mon}$ 𝗩𝗮̀𝗼 𝗧𝗮̀𝗶 𝗞𝗵𝗼𝗮̉𝗻 𝗡𝗴𝐚̂𝗻 𝗛𝗮̀𝗻𝗴 𝗖𝘂̉𝗮 𝗕𝗮̣𝗻 💸\n→ 𝗖𝘂𝗮 𝗗𝗶́𝗻𝗵 𝗘𝗺 𝗚𝗮́𝗶 𝗠𝗮̀𝘂 ${icon}`,attachment: listimg},event.threadID, event.messageID);
            }
            else if (i == 2) {
                var mon = parseInt(args[1]) * 2; 
                    await Currencies.increaseMoney(event.senderID, mon); console.log("s2")
                        return api.sendMessage({body:`=== 『 𝗬𝗢𝗨 𝗪𝗜𝗡 』 ====\n━━━━━━━━━━━━━━━━━━\n\n→ 𝗤𝘂𝗮𝘆 𝗧𝗿𝘂́𝗻𝗴: ${full.join(" | ")}\n→ 𝗕𝗮̣𝗻 𝗩𝘂̛̀𝗮 𝗖𝘂𝗮 Đ𝘂̛𝗼̛̣𝗰 𝗠𝗼̣̂𝘁 𝗘𝗺 𝗩𝗮̀ 𝗠𝗮𝗻𝗴 𝗩𝗲̂̀ 𝗟𝗮̀𝗺 𝗖𝗼𝗻 𝗗𝐚̂𝘂 𝗖𝘂̉𝗮 𝗠𝗲̣ 😍\n→ 𝗖𝗼̣̂𝗻𝗴 ${mon}$ 𝗩𝗮̀𝗼 𝗧𝗮̀𝗶 𝗞𝗵𝗼𝗮̉𝗻 𝗡𝗴𝐚̂𝗻 𝗛𝗮̀𝗻𝗴 𝗖𝘂̉𝗮 𝗕𝗮̣𝗻 💸\n→ 𝗖𝘂𝗮 𝗗𝗶́𝗻𝗵 𝗘𝗺 𝗚𝗮́𝗶 𝗠𝗮̀𝘂 ${icon}`,attachment: listimg},event.threadID, event.messageID);
            }
            else if (i == 3) {
                var mon = parseInt(args[1]) * 3; 
                    await Currencies.increaseMoney(event.senderID, mon); console.log('s3')
                        return api.sendMessage({body:`=== 『 𝗬𝗢𝗨 𝗪𝗜𝗡 』 ====\n━━━━━━━━━━━━━━━━━━\n\n→ 𝗤𝘂𝗮𝘆 𝗧𝗿𝘂́𝗻𝗴: ${full.join(" | ")}\n→ 𝗕𝗮̣𝗻 𝗩𝘂̛̀𝗮 𝗖𝘂𝗮 Đ𝘂̛𝗼̛̣𝗰 𝗠𝗼̣̂𝘁 𝗘𝗺 𝗩𝗮̀ 𝗠𝗮𝗻𝗴 𝗩𝗲̂̀ 𝗟𝗮̀𝗺 𝗖𝗼𝗻 𝗗𝐚̂𝘂 𝗖𝘂̉𝗮 𝗠𝗲̣ 😍\n→ 𝗖𝗼̣̂𝗻𝗴 ${mon}$ 𝗩𝗮̀𝗼 𝗧𝗮̀𝗶 𝗞𝗵𝗼𝗮̉𝗻 𝗡𝗴𝐚̂𝗻 𝗛𝗮̀𝗻𝗴 𝗖𝘂̉𝗮 𝗕𝗮̣𝗻 💸\n→ 𝗖𝘂𝗮 𝗗𝗶́𝗻𝗵 𝗘𝗺 𝗚𝗮́𝗶 𝗠𝗮̀𝘂 ${icon}`,attachment: listimg},event.threadID, event.messageID);
            }
            else return api.sendMessage("[ 𝗗𝗮𝘄𝗻🐧] → 𝗟𝗼̂̃𝗶 𝗥𝗼̂̀𝗶 Đ𝗼̛̣𝗶 𝗕𝗼𝘁 𝗠𝗼̣̂𝘁 𝗖𝗵𝘂́𝘁",event.threadID,event.messageID);
        } else  {
            await Currencies.decreaseMoney(event.senderID, parseInt(args[1])); console.log('s4')
            return api.sendMessage({body:`=== 『 𝗬𝗢𝗨 𝗟𝗢𝗦𝗘 』 ====\n━━━━━━━━━━━━━━━━━━\n\n→ 𝗤𝘂𝗮𝘆 𝗧𝗿𝘂́𝗻𝗴: ${full.join(" | ")}\n→ 𝗗𝗼 𝗕𝗮̣𝗻 𝗤𝘂𝗮́ 𝗫𝗮̂́𝘂 𝗧𝗿𝗮𝗶 𝗩𝗮̀ 𝗣𝗵𝗲̀𝗻 𝗡𝗲̂𝗻 Đ𝗮̃ 𝗕𝗶̣ 𝗖𝗼̂ 𝗔̂́𝘆 Đ𝗮́𝗶 𝗩𝗮̀𝗼 𝗠𝗮̣̆𝘁 😭\n→ 𝗧𝗿𝘂̛̀ ${args[1]}$ 𝗩𝗮̀𝗼 𝗧𝗮̀𝗶 𝗞𝗵𝗼𝗮̉𝗻 𝗡𝗴𝐚̂𝗻 𝗛𝗮̀𝗻𝗴 𝗖𝘂̉𝗮 𝗕𝗮̣𝗻 💸\n→ 𝗩𝗶̀ 𝗕𝗮̣𝗻 Đ𝗲́𝗼 𝗧𝗮́𝗻 Đ𝗼̂̃ 𝗘𝗺 𝗠𝗮̀𝘂 ${icon}\n→ 𝗕𝗮̣𝗻 𝗖𝗮̂̀𝗻 𝗛𝗼̣𝗰 𝗛𝗼̉𝗶 𝗔𝗱𝗺𝗶𝗻 𝗖𝘂̉𝗮 𝗕𝗼𝘁 𝗡𝗵𝗶𝗲̂̀𝘂 𝗛𝗼̛𝗻`,attachment: listimg},event.threadID, event.messageID);
        }
            } ,event.messageID);
    };