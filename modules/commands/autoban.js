 	    const time = moment.tz("Asia/Ho_Chi_minh").format("DD/MM/YYYY HH:mm:ss");
 			if (data && data.banned == true) return;
 			data.banned = true;
 			data.reason = `spam bot ${so_lan_spam} lần/${thoi_gian_spam/60000}phút`;
 			data.dateAdded = time;
 			await Threads.setData(threadID, { data });
 			global.data.threadBanned.set(threadID, { reason: data.reason, dateAdded: data.dateAdded });
 			global.client.autobanthread[threadID] = {
 	      timeStart: Date.now(),
 	      number: 0
 	    };
 			api.sendMessage({
 			  body: `🐙 ${threadID} \n ${dataThread.threadInfo.threadName}\n> Nhóm đã bị cấm sử dụng bot \n🐙 lý do: spam bot ${so_lan_spam}lần/${thoi_gian_spam/60000}phút\n> \n🐙 Unban sau ${Math.floor(unbanAfter/60000)}phút ,hẹn gặp lại \n<bye>`,
 			  attachment: fs.createReadStream(__dirname + `/noprefix/bank.gif`)
 			}, threadID, () => {
 			  setTimeout(async function() {
 			    delete data.autoban;
     	    data.banned = false;
     			data.reason = null;
     			data.dateAdded = null;
     			await Threads.setData(threadID, { data });
     			global.data.threadBanned.delete(threadID);
				api.sendMessage("🤧unban rùi nha🤧 \nđừng có mà spam bot nữa đó 🐛` gke", threadID);
 			  }, unbanAfter);
 			});
 			api.sendMessage(`🐠Đã autoban thread ${threadID} | ${dataThread.threadInfo.threadName} \n🐠Lý do spam bot ${so_lan_spam}lần/${Math.floor(thoi_gian_spam/60000)}phút\nThời gian: ${time}  \n🐠autounban sau 10p`, global.config.ADMINBOT[0]);
 	  }
 	}
 };
 
 // FIX