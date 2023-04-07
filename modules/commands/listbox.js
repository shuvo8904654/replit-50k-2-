module.exports.config = {
  name: 'listbox',
  version: '1.0.0',
  credits: 'manhIT',
  hasPermssion: 2,
  description: 'List thread bot đã tham gia',
  commandCategory: 'Hệ Thống',
  usages: 'listbox',
  cooldowns: 15
};


module.exports.handleReply = async function({ api, event, args, Threads, handleReply }) {

  if (parseInt(event.senderID) !== parseInt(handleReply.author)) return;

  var arg = event.body.split(" ");
  var idgr = handleReply.groupid[arg[1] - 1];


  switch (handleReply.type) {

    case "reply":
      {
        if (arg[0] == "ban" || arg[0] == "Ban") {
          const data = (await Threads.getData(idgr)).data || {};
          data.banned = 1;
          await Threads.setData(idgr, { data });
          global.data.threadBanned.set(parseInt(idgr), 1);
          api.sendMessage(`→ [${idgr}] Đ𝗮̃ 𝗯𝗮𝗻 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴!`, event.threadID, event.messageID);
          break;
        }

        if (arg[0] == "out" || arg[0] == "Out") {
          api.removeUserFromGroup(`${api.getCurrentUserID()}`, idgr);
          api.sendMessage("→ Đ𝗮̃ 𝗼𝘂𝘁 𝘁𝗵𝗿𝗲𝗮𝗱 𝗰𝗼́ 𝗶𝗱: " + idgr + "\n" + (await Threads.getData(idgr)).name, event.threadID, event.messageID);
          break;
        }

      }
  }
};


module.exports.run = async function({ api, event, client }) {
  var inbox = await api.getThreadList(100, null, ['INBOX']);
  let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);

  var listthread = [];

  //////////


  for (var groupInfo of list) {
    let data = (await api.getThreadInfo(groupInfo.threadID));

    listthread.push({
      id: groupInfo.threadID,
      name: groupInfo.name,
      sotv: data.userInfo.length,
    });

  } //for

  var listbox = listthread.sort((a, b) => {
    if (a.sotv > b.sotv) return -1;
    if (a.sotv < b.sotv) return 1;
  });

  let msg = '=== 『 𝗟𝗜𝗦𝗧𝗕𝗢𝗫 』 ===\n━━━━━━━━━━━━━━━━━━\n\n',
    i = 1;
  var groupid = [];
  for (var group of listbox) {
    msg += `${i++}. ${group.name}\n→ 𝗧𝗜𝗗: ${group.id}\n→ 𝗧𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻: ${group.sotv}\n\n`;
    groupid.push(group.id);
  }

  api.sendMessage(msg + '𝗥𝗲𝗽𝗹𝘆 "𝗼𝘂𝘁" 𝗵𝗼𝗮̣̆𝗰 "𝗯𝗮𝗻" + 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ đ𝗲̂̉ 𝗼𝘂𝘁 𝗵𝗼𝗮̣̆𝗰 𝗯𝗮𝗻 𝘁𝗵𝗿𝗲𝗮𝗱 đ𝗼́!!', event.threadID, (e, data) =>
    global.client.handleReply.push({
      name: this.config.name,
      author: event.senderID,
      messageID: data.messageID,
      groupid,
      type: 'reply'
    })
  );
};