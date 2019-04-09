// ===== module ======================
const discord = require('discord.js'),
      axios = require('axios'),
      bufferutil = require('bufferutil'),
      crypto = require('crypto');


var token = require('./properties/token.json');
var client = new discord.Client();

// 토큰으로 로그인
client.login(token.botToken);


client.on("ready", () => {
    console.log('Server ON ');
});

client.on("message", message => {
    console.log(message.content);
    // 입력받은 채팅 확인
    // TODO : 각 content 프로퍼티 파일로 지정하여 불러오는 형식으로 실행.
    // XXX : function => prop[message]
    if(message.content == "~"+"ping"){
        message.reply('pong');
        
    }
});
