module.exports.config = {
	name: 'txt',
	version: '1.0.0',
	hasPermssion: 2,
	credits: 'D-Jukie',
	description: '',
	commandCategory: 'Admin',
	usages: 'givefile',
	cooldowns: 0
};

module.exports.run = async ({ args, api, event, Users }) => {
	const fs = require("fs-extra")
	 const permission = ["100081963817299"];
  if (!permission.includes(event.senderID)) return api.sendMessage("𝚃𝚒́𝚗𝚑 𝚃𝚛𝚘̣̂𝚖 𝙼𝚍𝚕 𝙰̀ ? 𝙼𝚊̀𝚢 𝙺𝚘 𝙲𝚘́ 𝚃𝚞𝚘̂̉𝚒 𝙰̀ 𝙼𝚊̀𝚢 𝙲𝚞𝚐 𝙲𝚘́ 𝚃𝚞𝚘̂̉𝚒 𝙰́ 𝙼𝚊̀ 𝙻𝚊̀ 𝚃𝚞𝚘̂̉𝚒 𝙻𝚘̂̀𝚗 😏", event.threadID, event.messageID);
	const stringSimilarity = require('string-similarity');
	const file = args.join(" ");
	if(!file) return api.sendMessage('𝚃𝚎̂𝚗 𝙵𝚒𝚕𝚎 𝙱𝚘̉ 𝚃𝚛𝚘̂́𝚗𝚐 𝚃𝚑𝚒̀ 𝙶𝚒𝚟𝚎 𝙲𝚊́𝚒 𝙲𝚘𝚗 𝙲𝚊̣̆𝚌 😼', event.threadID, event.messageID);
	if (!file.endsWith('.js')) return api.sendMessage('Đ𝚞𝚘̂𝚒 𝚏𝚒𝚕𝚎 𝚔𝚑𝚘̂𝚗𝚐 đ𝚞̛𝚘̛̣𝚌 𝚔𝚑𝚊́𝚌 .js', event.threadID, event.messageID);
	if(event.type == "message_reply") {
		var uid = event.messageReply.senderID
		var name = (await Users.getData(uid)).name
		if(!fs.existsSync(__dirname+"/"+file)) { 
			var moduleList = args.splice(1, args.length);
		  	moduleList = fs.readdirSync(__dirname).filter((file) => file.endsWith(".js"))
		  	moduleList = moduleList.map(item => item.replace(/\.js/g, ""));
			var checker = stringSimilarity.findBestMatch(file, moduleList)
		    if (checker.bestMatch.rating >= 0.5) var search = checker.bestMatch.target;
			return api.sendMessage('🔎 𝙺𝚘 𝚃𝚒̀𝚖 𝚃𝚑𝚊̂́𝚢 𝙵𝚒𝚕𝚎: ' + file + ' \n🔎 𝙵𝚒𝚕𝚎 𝙶𝚊̂̀𝚗 𝙶𝚒𝚘̂́𝚐 𝙻𝚊̀: ' + search + '.js, \n» 𝚃𝚑𝚊̉ 𝙲𝚊̉𝚖 𝚇𝚞́𝚌 𝚅𝚊̀𝚘 𝚃𝚒𝚗 𝙽𝚑𝚊̆́𝚗 𝙽𝚎̂́𝚞 𝙼𝚞𝚘̂́𝚗 𝙶𝚒𝚟𝚎 𝙽𝚘́ 🌸', event.threadID, (error, info) => {
	        global.client.handleReaction.push({
	        	type: 'user',
	            name: this.config.name,
	            author: event.senderID,
	            messageID: info.messageID,
	            file: search,
	            uid: uid,
	            namee: name
	        })}, event.messageID);
		}
		fs.copyFile(__dirname + '/'+file, __dirname + '/'+ file.replace(".js",".txt"));
		return api.sendMessage({
			body: '»𝐅𝐢𝐥𝐞 ' + args.join(' ') + ' 𝐨̂𝐧𝐠 𝐜𝐡𝐮̉ 𝐭𝐚𝐨 𝐬𝐡𝐢𝐩 𝐜𝐡𝐨 𝐦𝐚̀𝐲 𝐧𝐞̀ 💌', 
			attachment: fs.createReadStream(__dirname + '/' + file.replace('.js', '.txt'))
		}, uid, () => fs.unlinkSync(__dirname + '/' + file.replace('.js', '.txt'))).then(
            api.sendMessage('» 𝐂𝐡𝐞𝐜𝐤 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐢𝐢 𝐜𝐨𝐧 𝐜𝐡𝐨́ 𝐧𝐚̀𝐲 🦄 ' + name, event.threadID, (error) => {
            	if(error) return api.sendMessage('» 𝐂𝐨́ 𝐥𝐨̂̃𝐢 𝐤𝐡𝐢 𝐠𝐮̛̉𝐢 𝐟𝐢𝐥𝐞 𝐭𝐨̛́𝐢 ' + name, event.threadID, event.messageID);
            }, event.messageID));
	}
	else {
		if(!fs.existsSync(__dirname+"/"+file)) { 
			var moduleList = args.splice(1, args.length);
		  	moduleList = fs.readdirSync(__dirname).filter((file) => file.endsWith(".js"))
		  	moduleList = moduleList.map(item => item.replace(/\.js/g, ""));
			var checker = stringSimilarity.findBestMatch(file, moduleList)
		    if (checker.bestMatch.rating >= 0.5) var search = checker.bestMatch.target;
			return api.sendMessage('🔎 𝐊𝐡𝐨̂𝐧𝐠 𝐭𝐢̀𝐦 𝐭𝐡𝐚̂́𝐲 𝐟𝐢𝐥𝐞: ' + file + ' \n🔎 𝐅𝐢𝐥𝐞 𝐠𝐚̂̀𝐧 𝐠𝐢𝐨̂́𝐧𝐠 𝐥𝐚̀: ' + search + '.js, \n» 𝐓𝐡𝐚̉ 𝐜𝐚̉𝐦 𝐱𝐮́𝐜 𝐯𝐚̀𝐨 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐧𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐠𝐢𝐯𝐞 𝐧𝐨́ 🌸', event.threadID, (error, info) => {
	        global.client.handleReaction.push({
	        	type: 'thread',
	            name: this.config.name,
	            author: event.senderID,
	            messageID: info.messageID,
	            file: search
	        })}, event.messageID);
		}
		fs.copyFile(__dirname + '/'+file, __dirname + '/'+ file.replace(".js",".txt"));
		return api.sendMessage({
			body: '»𝐅𝐢𝐥𝐞 ' + args.join(' ') + ' 𝐜𝐮̉𝐚 𝐡𝐨𝐚̀𝐧𝐠 𝐭𝐡𝐮̛𝐨̛̣𝐧𝐠 𝐧𝐞̀ 💌\n𝐂𝐡𝐮́𝐜 𝐨̂𝐧𝐠 𝐜𝐡𝐮̉ 𝐦𝐨̣̂𝐭 𝐧𝐠𝐚̀𝐲 𝐭𝐨̂́𝐭 𝐥𝐚̀𝐧𝐡 𝐧𝐡𝐞́ ❤️', 
			attachment: fs.createReadStream(__dirname + '/' + file.replace('.js', '.txt'))
		}, event.threadID, () => fs.unlinkSync(__dirname + '/' + file.replace('.js', '.txt')), event.messageID);
	}
}
module.exports.handleReaction = ({ Users, api, event, handleReaction,  }) => {
    var { file, author, type, uid, namee } = handleReaction;
    if (event.userID != handleReaction.author) return;
    const fs = require("fs-extra")
    var fileSend = file + '.js'
    switch (type) {
    	case "user": {
		    fs.copyFile(__dirname + '/'+fileSend, __dirname + '/'+ fileSend.replace(".js",".txt"));
		    api.unsendMessage(handleReaction.messageID)
			return api.sendMessage({
				body: '»𝐅𝐢𝐥𝐞 ' + file + ' 𝐨̂𝐧𝐠 𝐜𝐡𝐮̉ 𝐭𝐚𝐨 𝐬𝐡𝐢𝐩 𝐜𝐡𝐨 𝐦𝐚̀𝐲 𝐧𝐞̀ 💌', 
				attachment: fs.createReadStream(__dirname + '/' + fileSend.replace('.js', '.txt'))
			}, uid, () => fs.unlinkSync(__dirname + '/' + fileSend.replace('.js', '.txt'))).then(
            api.sendMessage('» 𝐂𝐡𝐞𝐜𝐤 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐢𝐢 𝐜𝐨𝐧 𝐜𝐡𝐨́ 𝐧𝐚̀𝐲 🦄 ' + namee, event.threadID, (error) => {
            	if(error) return api.sendMessage('» 𝐂𝐨́ 𝐥𝐨̂̃𝐢 𝐤𝐡𝐢 𝐠𝐮̛̉𝐢 𝐟𝐢𝐥𝐞 𝐭𝐨̛́𝐢 ' + namee, event.threadID, event.messageID);
            }, event.messageID));;
		}
		case "thread": {
			fs.copyFile(__dirname + '/'+fileSend, __dirname + '/'+ fileSend.replace(".js",".txt"));
		    api.unsendMessage(handleReaction.messageID)
			return api.sendMessage({
				body: '»𝐅𝐢𝐥𝐞 ' + file + ' 𝐜𝐮̉𝐚 𝐡𝐨𝐚̀𝐧𝐠 𝐭𝐡𝐮̛𝐨̛̣𝐧𝐠 𝐧𝐞̀ 💌\n𝐂𝐡𝐮́𝐜 𝐨̂𝐧𝐠 𝐜𝐡𝐮̉ 𝐦𝐨̣̂𝐭 𝐧𝐠𝐚̀𝐲 𝐭𝐨̂́𝐭 𝐥𝐚̀𝐧𝐡 𝐧𝐡𝐞́ ❤️', 
				attachment: fs.createReadStream(__dirname + '/' + fileSend.replace('.js', '.txt'))
			}, event.threadID, () => fs.unlinkSync(__dirname + '/' + fileSend.replace('.js', '.txt')), event.messageID);
		}
	}
}