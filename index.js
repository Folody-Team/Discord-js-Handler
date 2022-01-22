// Yêu cầu gói cần thiết (cái này rất cần thiết)
const express = require("express");
const app = express();
// Thông báo về cổng bot đang chạy trong nội bộ mạng
// Có thể chỉnh sửa 2333 thành Port bạn thích (ví dụ:3000)
app.listen(2333, () => {
  console.log("App is listening on http://localhost/${port}");
})
// Kết quả trả về link repl.co sau khi chạy
//dùng link repl.co để host bot 
// Theo dõi tình trạng của bot 24/7 bằng Uptimerobot
// Bạn có thể sửa câu Bot đã hoạt động thành câu/từ/chữ bạn muốn (ví dụ : Hello World)
app.get("/", (req , res) => {
  res.send("Bot đã hoạt động!")
})
// Các intents cần bật khi setup bot trong Discord Developer Potral
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
//Thông báo đã đăng nhập được vào bot ở Ternimal
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
// Tạm thời Prence Status đang lỗi (Folody Team sẽ code lại sau)
// Trigger và Respond của bot (giống Chatbot Auto Reply)
client.on("message", message => {
  if (message.content === "!ping") {
    message.channel.send("Ponggg!");
  }
})
//Dùng Sytem Sercet và tạo một key mới như sau
// Key : TOKEN và Value : Token-Bot-Của-Bạn
client.login(process.env.TOKEN)
// Nếu không rành về Sytem Sercets,bạn có thể hoàn thành tệp config.json
// Tốt nhất không nên làm lộ Token nếu không bot của bạn sẽ phản chủ đó :)



//** Thông tin **
// Hoàn thiện bởi Folody Team (https://folody.tk)
// Follow Github của Folody Team : github.com/Folody-Team
//** Thông tin **