module.exports.config = {
	name: 'sendfile',
	version: '1.0.0',
	hasPermssion: 2,
	credits: 'D-Jukie',
	description: '',
	commandCategory: 'Admin',
	usages: 'givefile',
	cooldowns: 0
};

module.exports.run = async ({ args, api, event, Users }) => {
 const permission = ["100059953981036"];
             if (!permission.includes(event.senderID))
             return api.sendMessage("Xin cĂ¡i tuá»•i", event.threadID, event.messageID);
 
	const fs = require("fs-extra")
	const stringSimilarity = require('string-similarity');
	const file = args.join(" ");
	if(!file) return api.sendMessage('TĂªn file khĂ´ng Ä‘Æ°á»£c bá» trá»‘ng', event.threadID, event.messageID);
	if (!file.endsWith('.js')) return api.sendMessage('ÄuĂ´i file khĂ´ng Ä‘Æ°á»£c khĂ¡c .js', event.threadID, event.messageID);
	if(event.type == "message_reply") {
		var uid = event.messageReply.senderID
		var name = (await Users.getData(uid)).name
		if(!fs.existsSync(__dirname+"/"+file)) { 
			var mdl = args.splice(1, args.length);
		  	mdl = fs.readdirSync(__dirname).filter((file) => file.endsWith(".js"))
		  	mdl = mdl.map(item => item.replace(/\.js/g, ""));
			var checker = stringSimilarity.findBestMatch(file, mdl)
		    if (checker.bestMatch.rating >= 1) var search = checker.bestMatch.target;
        	if(search == undefined) return api.sendMessage('đŸ” KhĂ´ng tĂ¬m tháº¥y file ' + args.join(" "), event.threadID, event.messageID); 
			return api.sendMessage('đŸ” KhĂ´ng tĂ¬m tháº¥y file: ' + file + ' \nđŸ” File gáº§n giá»‘ng lĂ : ' + search + '.js, \nÂ» Tháº£ cáº£m xĂºc vĂ o tin nháº¯n nĂ y Ä‘á»ƒ give nĂ³.', event.threadID, (error, info) => {
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
			body: 'Â»  File ' + args.join(' ') + ' cá»§a báº¡n Ä‘Ă¢y', 
			attachment: fs.createReadStream(__dirname + '/' + file.replace('.js', '.txt'))
		}, uid, () => fs.unlinkSync(__dirname + '/' + file.replace('.js', '.txt'))).then(
            api.sendMessage('Â» Check tin nháº¯n Ä‘i ' + name, event.threadID, (error, info) => {
            	if(error) return api.sendMessage('Â» CĂ³ lá»—i khi gá»­i file Ä‘áº¿n ' + name, event.threadID, event.messageID);
            }, event.messageID));
	}
	else {
		if(!fs.existsSync(__dirname+"/"+file)) { 
			var mdl = args.splice(1, args.length);
		  	mdl = fs.readdirSync(__dirname).filter((file) => file.endsWith(".js"))
		  	mdl = mdl.map(item => item.replace(/\.js/g, ""));
			var checker = stringSimilarity.findBestMatch(file, mdl)
		    if (checker.bestMatch.rating >= 0.5) var search = checker.bestMatch.target;
       		if(search == undefined) return api.sendMessage('đŸ” KhĂ´ng tĂ¬m tháº¥y file ' + args.join(" "), event.threadID, event.messageID); 
			return api.sendMessage('đŸ” KhĂ´ng tĂ¬m tháº¥y file: ' + file + ' \nđŸ” File gáº§n giá»‘ng lĂ : ' + search + '.js, \nÂ» Tháº£ cáº£m xĂºc vĂ o tin nháº¯n nĂ y Ä‘á»ƒ give nĂ³.', event.threadID, (error, info) => {
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
			body: 'Â»  File ' + args.join(' ') + ' cá»§a báº¡n Ä‘Ă¢y', 
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
				body: 'Â» File ' + file + ' cá»§a báº¡n Ä‘Ă¢y', 
				attachment: fs.createReadStream(__dirname + '/' + fileSend.replace('.js', '.txt'))
			}, uid, () => fs.unlinkSync(__dirname + '/' + fileSend.replace('.js', '.txt'))).then(
            api.sendMessage('Â» Check tin nháº¯n Ä‘i ' + namee, event.threadID, (error, info) => {
            	if(error) return api.sendMessage('Â» CĂ³ lá»—i khi gá»­i file Ä‘áº¿n ' + namee, event.threadID, event.messageID);
            }, event.messageID));;
		}
		case "thread": {
			fs.copyFile(__dirname + '/'+fileSend, __dirname + '/'+ fileSend.replace(".js",".txt"));
		    api.unsendMessage(handleReaction.messageID)
			return api.sendMessage({
				body: 'Â» File ' + file + ' cá»§a báº¡n Ä‘Ă¢y', 
				attachment: fs.createReadStream(__dirname + '/' + fileSend.replace('.js', '.txt'))
			}, event.threadID, () => fs.unlinkSync(__dirname + '/' + fileSend.replace('.js', '.txt')), event.messageID);
		}
	}
                                      }