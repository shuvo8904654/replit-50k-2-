module.exports.config = {
  name: "taixiu",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "khoa",
  description: "Chơi tài xỉu một người đặt, không dùng api",
  commandCategory: "Game",
  usages: '[tài/xỉu hoặc chẵn/lẻ] [số tiền]\nDùng "taixiu luật chơi" để biết luật chơi!',
  cooldowns: 5
};

module.exports.onLoad = () => {
  const fs = require("fs-extra");
  const request = require("request");
  const dirMaterial = __dirname + `/cache/`;
  if (!fs.existsSync(dirMaterial + "cache")) fs.mkdirSync(dirMaterial, { recursive: true });
  if (!fs.existsSync(dirMaterial + "icontaixiu.png")) request("https://i.postimg.cc/ydh7gfLg/icontaixiu.png").pipe(fs.createWriteStream(dirMaterial + "icontaixiu.png"));
}

module.exports.run = async function ({
  api,
  event,
  args,
  Currencies,
  Users
}) {

  // Loli is the best!!

  const { loadImage, createCanvas } = require("canvas");
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  let pathImg = __dirname + "/cache/bkdia.png";
  let pathXn1 = __dirname + "/cache/xingaum.png";
  let pathXn2 = __dirname + "/cache/xingauh.png";
  let pathXn3 = __dirname + "/cache/xingaub.png";

  var { threadID, messageID, senderID } = event;
  const dataMoney = await Currencies.getData(senderID);
  const money = dataMoney.money;
  if (args.length !== 2) return api.sendMessage("Không đúng định dạng!", threadID, messageID);

  if (event.body.indexOf("luật chơi") !== -1) {
    var msg = {
      body: "cách chơi chưa được update...",
      attachment: fs.createReadStream(__dirname + `/cache/icontaixiu.png`)
    }
    return api.sendMessage(msg, threadID, messageID);
  }

  var datcuoc = args[0].toLowerCase();
  var tiencuoc = parseInt(args[1]);
  if (datcuoc !== 'tài' && (datcuoc !== 'xỉu' && (datcuoc !== 'chẵn' && (datcuoc !== 'lẻ')))) return api.sendMessage(`Đặt cược tài/xỉu hoặc chẵn/lẻ thôi, ${datcuoc} là cc gì thế!`, threadID, messageID);
  if (tiencuoc < 100) return api.sendMessage("→ 𝗧𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 𝗾𝘂𝗮́ 𝗶́𝘁 𝘁𝗮𝗼 𝗸𝗵𝗼̂𝗻𝗴 𝗰𝗵𝗮̂́𝗽 𝗻𝗵𝗮̣̂𝗻!", threadID, messageID);
  if (isNaN(tiencuoc)) return api.sendMessage("→ 𝗧𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 𝗽𝗵𝗮̉𝗶 𝗹𝗮̀ 𝗺𝗼̣̂𝘁 𝗰𝗼𝗻 𝘀𝗼̂́!", threadID, messageID);
  if (tiencuoc > money) return api.sendMessage(`→ 𝗕𝗮̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗰𝗼́ đ𝘂̉ ${tiencuoc}$ đ𝗲̂̉ 𝗰𝗵𝗼̛𝗶, 𝘃𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝘁𝗵𝗲𝗼 𝘁𝗵𝗮̂̀𝘆 𝗛𝘂𝗮̂́𝗻 𝗯𝘂̛𝗼̛𝗻 𝗰𝗵𝗮̉𝗶`, threadID, messageID);

  api.sendMessage("→ Đ𝗮𝗻𝗴 𝗹𝗮̆́𝗰 𝘅𝗶𝗻 𝘃𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗰𝗵𝗼̛̀ 𝟮𝘀...", threadID, messageID);

  var xnmot = Math.floor(Math.random() * 6) + 1;
  var xnhai = Math.floor(Math.random() * 6) + 1;
  var xnba = Math.floor(Math.random() * 6) + 1;
  var tong = xnmot + xnhai + xnba;

  if (datcuoc == 'tài' || (datcuoc == 'xỉu')) {
    if (xnmot == xnhai && xnmot == xnba) {
      var ketqua = 'thua'; 
    }
    else {
      if (tong >= 4 && (tong <= 10)) var ketqua = 'xỉu';
    if (tong >= 11 && (tong <= 17)) var ketqua = 'tài';
    }
  };

  if (datcuoc == 'chẵn' || (datcuoc == 'lẻ')) {
    if (tong % 2 == 0) var ketqua = 'chẵn';
    else var ketqua = 'lẻ';
  };

  if (xnmot == 1) var link1 = `https://i.postimg.cc/c1mGP3CX/x-ng-u-1.png`
  if (xnmot == 2) var link1 = `https://i.postimg.cc/pr2bpWGf/x-ng-u-2.png`
  if (xnmot == 3) var link1 = `https://i.postimg.cc/d0dz6kgR/x-ng-u-3.png`
  if (xnmot == 4) var link1 = `https://i.postimg.cc/52Dh8qKN/x-ng-u-4.png`
  if (xnmot == 5) var link1 = `https://i.postimg.cc/76nj8vHf/x-ng-u-5.png`
  if (xnmot == 6) var link1 = `https://i.postimg.cc/j5bBFqrp/x-ng-u-6.png`

  if (xnhai == 1) var link2 = `https://i.postimg.cc/c1mGP3CX/x-ng-u-1.png`
  if (xnhai == 2) var link2 = `https://i.postimg.cc/pr2bpWGf/x-ng-u-2.png`
  if (xnhai == 3) var link2 = `https://i.postimg.cc/d0dz6kgR/x-ng-u-3.png`
  if (xnhai == 4) var link2 = `https://i.postimg.cc/52Dh8qKN/x-ng-u-4.png`
  if (xnhai == 5) var link2 = `https://i.postimg.cc/76nj8vHf/x-ng-u-5.png`
  if (xnhai == 6) var link2 = `https://i.postimg.cc/j5bBFqrp/x-ng-u-6.png`

  if (xnba == 1) var link3 = `https://i.postimg.cc/c1mGP3CX/x-ng-u-1.png`
  if (xnba == 2) var link3 = `https://i.postimg.cc/pr2bpWGf/x-ng-u-2.png`
  if (xnba == 3) var link3 = `https://i.postimg.cc/d0dz6kgR/x-ng-u-3.png`
  if (xnba == 4) var link3 = `https://i.postimg.cc/52Dh8qKN/x-ng-u-4.png`
  if (xnba == 5) var link3 = `https://i.postimg.cc/76nj8vHf/x-ng-u-5.png`
  if (xnba == 6) var link3 = `https://i.postimg.cc/j5bBFqrp/x-ng-u-6.png`

  var color = [
    "https://i.postimg.cc/mggtbQLy/green.png",
    "https://i.postimg.cc/Gmg99H9w/lightblue.png",
    "https://i.postimg.cc/PqLJDT8L/lightgreen.png",
    "https://i.postimg.cc/26h5HGGr/luzaly.png",
    "https://i.postimg.cc/90BQ2fsk/orange.png",
    "https://i.postimg.cc/T2jwgkhc/pantone.png",
    "https://i.postimg.cc/1zLtc2pv/pink.png",
    "https://i.postimg.cc/2yYSgW9v/red.png",
    "https://i.postimg.cc/DwXR4Nwv/yellow.png",
    "https://i.postimg.cc/y8zQbyHn/violet.png"
  ];
  var background = color[Math.floor(Math.random() * color.length)];

  // Đống link trên bị lỗi thì liên hệ https://www.facebook.com/khoa.lolicon/ để lấy ảnh.

  let Xingaum = (
    await axios.get(
      `${link1}`,
      { responseType: "arraybuffer" }
    )
  ).data;
  fs.writeFileSync(pathXn1, Buffer.from(Xingaum, "utf-8"));

  let Xingauh = (
    await axios.get(
      `${link2}`,
      { responseType: "arraybuffer" }
    )
  ).data;
  fs.writeFileSync(pathXn2, Buffer.from(Xingauh, "utf-8"));

  let Xingaub = (
    await axios.get(
      `${link3}`,
      { responseType: "arraybuffer" }
    )
  ).data;
  fs.writeFileSync(pathXn3, Buffer.from(Xingaub, "utf-8"));

  let getBkdia = (
    await axios.get(`${background}`, {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathImg, Buffer.from(getBkdia, "utf-8"));

  let baseImage = await loadImage(pathImg);
  let baseXn1 = await loadImage(pathXn1);
  let baseXn2 = await loadImage(pathXn2);
  let baseXn3 = await loadImage(pathXn3);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(baseXn1, 200, 150, 100, 100);
  ctx.drawImage(baseXn2, 280, 150, 100, 100);
  ctx.drawImage(baseXn3, 250, 220, 100, 100);
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  fs.removeSync(pathXn1);
  fs.removeSync(pathXn2);
  fs.removeSync(pathXn3);

  if (ketqua == 'thua') {
    Currencies.decreaseMoney(senderID, tiencuoc);
    return api.sendMessage({ body: `=== 『 𝗬𝗢𝗨 𝗟𝗢𝗦𝗘 』 ====\n━━━━━━━━━━━━━━━━━━\n\n→ 𝗫𝗶́ 𝗻𝗴𝗮̂̀𝘂 𝗿𝗮: ${xnmot}, ${xnhai} 𝘃𝗮̀ ${xnba}\n→ 𝗕𝗮 𝘅𝗶́ 𝗻𝗴𝗮̂̀𝘂 𝗯𝗮̆̀𝗻𝗴 𝗻𝘂́𝘁 𝗻𝗲̂𝗻 𝗰𝗮̉ 𝘁𝗮̀𝗶 𝘃𝗮̀ 𝘅𝗶̉𝘂 đ𝗲̂̀𝘂 𝘁𝗵𝘂𝗮 𝘀𝗺𝗹! 🎭`, attachment: fs.createReadStream(pathImg) },
      threadID,
      () => fs.unlinkSync(pathImg),
      messageID);
  }
  else if (ketqua == datcuoc) {
    Currencies.increaseMoney(senderID, tiencuoc);
    return api.sendMessage({ body: `=== 『 𝗬𝗢𝗨 𝗪𝗜𝗡 』 ====\n━━━━━━━━━━━━━━━━━━\n\n→ 𝗫𝗶́ 𝗻𝗴𝗮̂̀𝘂 𝗿𝗮: ${xnmot}, ${xnhai} 𝘃𝗮̀ ${xnba}\n→ 𝗧𝗼̂̉𝗻𝗴 𝗹𝗮̀ ${tong} 𝗻𝘂́𝘁\n→ 𝗞𝗲̂́𝘁 𝗾𝘂𝗮̉ 𝗹𝗮̀ ${ketqua} \n→ 𝗕𝗮̣𝗻 𝘁𝗵𝗮̆́𝗻𝗴! +${tiencuoc}$`, attachment: fs.createReadStream(pathImg) },
      threadID,
      () => fs.unlinkSync(pathImg),
      messageID);
  }
  else {
    Currencies.decreaseMoney(senderID, tiencuoc);
    return api.sendMessage({ body: `=== 『 𝗬𝗢𝗨 𝗟𝗢𝗦𝗘 』 ====\n━━━━━━━━━━━━━━━━━━\n\n→ 𝗫𝗶́ 𝗻𝗴𝗮̂̀𝘂 𝗿𝗮: ${xnmot}, ${xnhai} 𝘃𝗮̀ ${xnba}\n→ 𝗧𝗼̂̉𝗻𝗴 𝗹𝗮̀ ${tong} 𝗻𝘂́𝘁\n→ 𝗞𝗲̂́𝘁 𝗾𝘂𝗮̉ 𝗹𝗮̀ ${ketqua} \n→ 𝗕𝗮̣𝗻 𝘁𝗵𝘂𝗮 𝘀𝗺𝗹 -${tiencuoc}$`, attachment: fs.createReadStream(pathImg) },
      threadID,
      () => fs.unlinkSync(pathImg),
      messageID);
  };
}

