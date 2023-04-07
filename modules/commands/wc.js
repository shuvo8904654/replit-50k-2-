module.exports = new Module ({
    name: 'wc',
    version: '205',
    hasPermssion: 0,
    credits: 'Công Nam',
    description: 'WC',
    commandCategory: 'Tiện ích',
    usages: '[]',
    cooldowns: 3,
    dependencies: {}
});

function Module (info) {
    wc = 'https://bongda24h.vn/vck-world-cup/ket-qua-41.html',
    vs = null,
    axios = require('axios'),
    cheerio = require('cheerio'),
    this.config = info,
    this.run = function(bot) {
        const
        send = b=>bot.api.sendMessage(b, bot.event.threadID);

        axios.get(wc)
        .then(async success=> {
            const
            html = success.data,
            $ = cheerio.load(html),
            date = $(`div.football-header h3`).eq(0).text(),
            array_1 = [];

            $(`div.football-match.fix-hot`).each((i, el)=> {
                const
                temp_1 = [],
                columns_1 = $(el).find(`div`).eq(0),
                _c_1 = $(columns_1).find(`span`),
                columns_2 = $(el).find(`div`).eq(1),
                _c_2 = $(columns_2).find(`div`).eq(0),
                club_1 = _c_2.find(`div:eq(0) span`),
                club_2 = _c_2.find(`div:eq(2) span`),
                columns_3 = $(el).find(`div`).eq(6);

                temp_1.push(_c_1.eq(0).text(), _c_1.eq(1).text(), [club_1.text(), club_1.find(`img`).attr(`data-src`), _c_2.find(`div:eq(1) span`).text(), club_2.text(), club_2.find(`img`).attr(`data-src`)], columns_3.find(`div:eq(3) span`).text());

                array_1.push(temp_1);
            });
            var txt = `== 𝗧𝗛𝗢̂𝗡𝗚 𝗧𝗜𝗡 𝗪𝗢𝗥𝗗 𝗡𝗚𝗔̀𝗬 ==\n→ ${date}\n━━━━━━━━━━━━━━━━━━\n\n`.toUpperCase(), i = 0, l = array_1.length, s = [];
            for (; i < l; i++) {
                try {
                    const
                    f = array_1[i],
                    g = async j=>(await axios.get(j, {
                        responseType: 'stream'
                    })).data;
                    txt += `→ 𝗧𝗵𝗼̛̀𝗶 𝗚𝗶𝗮𝗻: ${f[0]}.\n→ 𝗕𝗮̉𝗻𝗴: ${f[1]}.\n→ 𝗞𝗲̂𝗻𝗵 𝗖𝗵𝗶𝗲̂́𝘂: ${f[2][5] || '𝗖𝗵𝘂̛𝗮 𝗖𝗼́ 𝗗𝘂̛̃ 𝗟𝗶𝗲̣̂𝘂.'}\n→ ${f[2][0]} 『${f[2][2]}』 ${f[2][3]}\n━━━━━━━━━━━━━━━━━━\n\n`;
                   s.push(await g(f[2][1])),
                   s.push(await g('https://raw.githubusercontent.com/duongcongnam02/image/main/1669545647176.png')),
                   s.push(await g(f[2][4]));
                } catch {
                    continue
                };
            };
            send({
                body: txt, attachment: s
            });
        })
        .catch(err=>send(err.message));
    };
};