module.exports.config = {
  name: "out",
  version: "1.0.0",
  hasPermssion: 3,
  credits: "DũngUwU",
  description: "out box",
  commandCategory: "Tài khoản",
  usages: "[tid]",
  cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
  const permission = ["","100000125779408",""];
  if (!permission.includes(event.senderID))
  return api.sendMessage("Xin cái tuổi để out?", event.threadID, event.messageID);
  var id;
  if (!args.join(" ")) {
    id = event.threadID;
  } else {
    id = parseInt(args.join(" "));
  }
  return api.sendMessage('Đã nhận lệnh out nhóm từ admin!', id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
}