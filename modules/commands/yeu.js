module.exports.config = {

    name: "yeu",

    version: "1.0.1",

    hasPermssion: 0,

    credits: "Lê Định",

    description: "",

    commandCategory: "𝐍𝐨 𝐏𝐫𝐞𝐟𝐢𝐱",

    usages: "",

    cooldowns: 10,

    denpendencies: {

        "fs": "",

        "request": ""

    }

};

module.exports.onLoad = () => {

    const fs = require("fs-extra");

    const request = require("request");

    const dirMaterial = __dirname + `/noprefix/`;

    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });

    if (!fs.existsSync(dirMaterial + "yêu.mp4")) request("https://i.imgur.com/Xp7nKX6.mp4").pipe(fs.createWriteStream(dirMaterial + "yêu.mp4"));

}

module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {

    const fs = require("fs");

    let name = await Users.getNameUser(event.senderID)

    var msg = {

                body: `𝗫𝗶𝗻 𝗰𝗵𝗮̀𝗼 ${name} 𝗰𝗼𝗻 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗰𝗼́ 𝘁𝗶̀𝗻𝗵 𝘆𝗲̂𝘂 💕`,

                attachment: fs.createReadStream(__dirname + `/noprefix/yêu.mp4`)

            }

    if (event.body.toLowerCase() == "yeuem:3"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

    if (event.body.toLowerCase() == "Yêu"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

    if (event.body.toLowerCase() == "Yeuemm:3"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

    if (event.body.toLowerCase() == "iuuemm:3"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

    if (event.body.toLowerCase() == "iuu:3"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

    if (event.body.toLowerCase() == "yêuu"){

        return api.sendMessage(msg,event.threadID,event.messageID);}

        };

module.exports.run = async ({ event, api, Currencies, args, utils }) => {

return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)

      }