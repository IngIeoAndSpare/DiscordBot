// ===== module ======================
// const discord = require('discord.js'),
//       axios = require('axios'),
//       Bufferutil = require('bufferutil'),
//       crypto = require('crypto');


const Discord = require('discord.js');
var token = require('./properties/token.json');
      
var client = new Discord.Client();

// 토큰으로 로그인
client.login(token.botToken);


//
client.on("ready", () => {
    console.log('Server ON ');
});

client.on("message", message => {
    console.log(message.content);
    // 입력받은 채팅 확인

    if(message.content == "~"+"ping"){
        message.reply('pong');
        
    }
});