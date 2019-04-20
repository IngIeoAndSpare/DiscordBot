// ===== module ======================
const discord = require('discord.js')
//      axios = require('axios'),
//      bufferutil = require('bufferutil'),
//      crypto = require('crypto');


const token = require('./properties/token.json');
const client = new discord.Client();

const request = require('request');

const preFix = '~';

// 던파 API 주소
const SERVERURL = 'https://api.neople.co.kr/';
const APIKEY = '?apikey=' + token.dfToken;

const SERVER_INFO = 'df/servers';

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

    if (message.content.startsWith('~')){
        // Prefix를 제외한 문자열
        var cmdLine = message.content.split('~')[1];
        // 띄워쓰기로 문자열 구분
        var cmdLineFirst = cmdLine.split(' ')[0];

        Command[cmdLineFirst](message, cmdLine);
        console.log(cmdLineFirst);
    }


    // function callback(result) {
    //     message.reply(result);
    // };
    
});




// 실제 명령어 구현
var Command = new Object;

Command['경매'] = function(message, cmdLine){

    console.log('경매장 조회');
};
// 서버정보
Command['서버'] = function(message, cmdLine){
    request(SERVERURL + SERVER_INFO + APIKEY,
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                message.reply(body);
            }
        });
}  



