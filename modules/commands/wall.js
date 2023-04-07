const axios = require("axios");
const fs = require("fs");
module.exports.config = {
    name: "wall",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Thiệu Trung Kiên",
    description: "Chụp ảnh profile của người dùng",
    commandCategory: "THÀNH VIÊN",
    usages: "",
    cooldowns: 5
}
module.exports.run = async function ({ api,Users,event, args }) {
  const name = await Users.getNameUser(event.senderID)
    api.sendMessage(`Chờ Một Chụt Nhé ${name} Sẽ Mất Tâm 15 Giây Đó`, event.threadID, event.messageID);
    var uid = String(args[0]);
    isNaN(uid) && (uid = Object.keys(event.mentions)[0], "message_reply" == event.type ? uid = event.messageReply.senderID : uid = event.senderID);
    var cookies = `datr=9cFjY0OeUHZI3BFcDieRp89b;sb=UqB8YlMk2oCnztFb28PuuCW_; datr=VKB8Ykh9KH0okbLrYO97st_a; c_user=100078826556728; xs=35:2xQNYn5HV_Zy3A:2:1668638631:-1:6284::AcWGfVjxNwQFwhjXP-xLhTg-ELBPmERphdKBNKF7uw; fr=00ErCE2hI0FvXFBQ9.AWUVEuO8IyXhnL75uhCUxMv0r2s.Bjd1ad.Z3.AAA.0.0.Bjd1c3.AWX_Hd8u788; presence=C{"t3":[],"utc3":1668765507024,"v":1}; wd=811x657;fr=0nAhvDsxxm53RrYIW.AWVXogOsIu0oiuIbbk227uF0UZ8.BjY8H1.vf.AAA.0.0.BjbKb3.AWW71hEbNyo;presence=C%7B%22lm3%22%3A%22g.4041113556008349%22%2C%22t3%22%3A%5B%7B%22i%22%3A%22g.5458262784262797%22%7D%2C%7B%22i%22%3A%22g.5490248381070356%22%7D%2C%7B%22i%22%3A%22g.5150585554977172%22%7D%5D%2C%22utc3%22%3A1668264699980%2C%22v%22%3A1%7D;|Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36`,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = `vpd=v1%3B634x360x2; sb=UqB8YlMk2oCnztFb28PuuCW_; datr=VKB8Ykh9KH0okbLrYO97st_a; c_user=100078826556728; xs=35:2xQNYn5HV_Zy3A:2:1668638631:-1:6284::AcUMxNToTVpjgl48k05UPzSzUKzU_YTATZNxN2wE7A; fr=0iXZYg2u8KD55yPdb.AWUGt3w_Bk7TdlHRYMj-wql_G9w.Bjd1Kn.Z3.AAA.0.0.Bjd1Kn.AWWcFqMV7hQ; wd=811x657; x-referer=eyJyIjoiL2ZyaWVuZHMvY2VudGVyL3JlcXVlc3RzLz9lYXY9QWZiZHFvSTMxMnAtVkxmeTl3WXF1N2JuT05SUFZ3djk2QUlJQXpuZXE1SmFNZGFpMDUzdEZWa2hSM3BzdW9WcUxrSSZwYWlwdj0wJnJmaiIsImgiOiIvZnJpZW5kcy9jZW50ZXIvcmVxdWVzdHMvP2Vhdj1BZmJkcW9JMzEycC1WTGZ5OXdZcXU3Ym5PTlJQVnd2OTZBSUlBem5lcTVKYU1kYWkwNTN0RlZraFIzcHN1b1ZxTGtJJnBhaXB2PTAmcmZqIiwicyI6Im0ifQ%3D%3D; useragent=TW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDguMS4wOyBWMTgxOFQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMDUuMC4wLjAgTW9iaWxlIFNhZmFyaS81MzcuMzY%3D; _uafec=Mozilla%2F5.0%20(Linux%3B%20Android%208.1.0%3B%20V1818T)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F105.0.0.0%20Mobile%20Safari%2F537.36;`;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`api-vip.procyrus.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `https://api.screenshotmachine.com/?key=f4c880&url=${url}&dimension=1920x1080`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({ 	body: `Ây Dô Xong Rồi nè ${name}`,
                         attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
      }