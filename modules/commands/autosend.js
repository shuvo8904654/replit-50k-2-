module.exports.config = {
    name: 'autosend1',
    version: '10.02',
    hasPermssion: 2,
    credits: 'DC-Nam', // được fix bởi sơn pro
    description: 'Tự động gửi tin nhắn theo giờ đã cài!',
    commandCategory: 'Hệ thống',
    usages: '[]',
    cooldowns: 3
};
const r = a => a[Math.floor(Math.random()*a.length)],
{
    get
} = require('axios'),
config = [{
        timer: '12:00:00 PM',
        message: ['➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗻𝗴𝘂̉ 𝗻𝗴𝗼𝗻 𝗻𝗵𝗮 \n━━━━━━━━━━━━━━━━━━ \n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
},
          {
        timer: '10:00:00 AM',
        message: ['➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶  𝗯𝘂𝗼̂̉𝗶 𝘁𝗿𝘂̛𝗮 𝘃𝘂𝗶 𝘃𝗲̂ \n━━━━━━━━━━━━━━━━━━ \n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
},
{
        timer: '6:00:00 AM',
        message: ['➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘀𝗮́𝗻𝗴 đ𝗮̂̀𝘆 𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴 \n━━━━━━━━━━━━━━━━━━ \n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
},
          {
        timer: '5:00:00 AM',
        message: ['➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗡𝗴𝗮̀𝘆 𝗺𝗼̛́𝗶 đ𝗮̂̀𝘆 𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴 \n━━━━━━━━━━━━━━━━━━ \n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
},
{ 
        timer: '12:00:00 AM',
        message: ['➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 𝗞𝗵𝘂𝘆𝗮 𝗥𝗼̂̀𝗶 𝗖𝗮̂́𝘁 𝗗𝗶𝗲̣̂𝗻 𝗧𝗵𝗼𝗮̣𝗶 𝗗𝗶 𝗡𝗴𝘂̉ 𝗗𝗲̂ \n━━━━━━━━━━━━━━━━━━ \n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
},
{
        timer: '10:00:00 PM',
        message: ['➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗻𝗴𝘂̉ 𝗻𝗴𝗼𝗻 \n━━━━━━━━━━━━━━━━━━ \n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
},
{
        timer: '6:00:00 PM',
        message: ['➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗠𝗼̣̂𝘁 𝗕𝘂𝗼̂̉𝗶 𝗧𝗼̂́𝗶 𝗖𝘂𝗼̂́𝗶 𝗡𝗴𝗮̀𝘆 𝘃𝘂𝗶 𝘃𝗲̉ \n━━━━━━━━━━━━━━━━━━ \n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
},
{
        timer: '1:30:00 PM',
        message: ['➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝗰𝗵𝗶𝗲̂̀𝘂 đ𝗮̂̀𝘆 𝗻𝗮̆𝗻𝗴 𝗹𝘂̛𝗼̛̣𝗻𝗴 \n━━━━━━━━━━━━━━━━━━ \n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
    }];
module.exports.onLoad = o => {
    if (!!global.autosendmessage_setinterval) clearInterval(global.autosendmessage_setinterval);
    global.autosendmessage_setinterval = setInterval(async function() {
        if (á = config.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) {
            var msg = r(á.message);
            msg = msg.replace(/{time}/g, (require("moment-timezone")).tz("Asia/Ho_Chi_Minh").format("HH:mm:ss (D/MM/YYYY) (dddd)")).replace(/{thinh}/g, (await get(`https://www.nguyenmanh.name.vn/api/thathinh`)).data.data)
            msg = {
                body: msg, attachment: (await get((await get(`https://nguyenlienmanh.com/videoan?apikey=basilvip`)).data.data, {
                    responseType: 'stream'
                })).data
            };
            global.data.allThreadID.forEach(i => o.api.sendMessage(msg, i));
        };
    }, 1000);
};
module.exports.run = () => {};