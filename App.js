// ===== module ======================
const discord = require('discord.js'),
      axios = require('axios'),
      propertiesReader = require('properties-reader');

// ===== properties ===================
const token = require('./properties/token.json'),
      apiUrl = require('./properties/apiList.js'),
      property = propertiesReader('./properties/property.properties');

const client = new discord.Client();
const preFix = '~';

// 던파 API key url
const DF_APIKEY = apiUrl.apiKey + token.dfToken;

// 실제 명령어 구현
var Command = {};

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

    if (message.content.startsWith(preFix)){
        // Prefix를 제외한 문자열
        var cmdLine = message.content.split(preFix)[1];
        // 띄워쓰기로 문자열 구분
        var cmdLineFirst = cmdLine.split(' ')[0];
        Command[cmdLineFirst](message, cmdLine);
        console.log(cmdLineFirst);
    }
});



Command[property.get('df.api.message.market')] = function(message, cmdLine){
    console.log('경매장 조회');
    // XXX: cmdLine params 값 확인 필요.


};
// 서버정보
Command[property.get('df.api.message.server')] = function(message, cmdLine){
    console.log('message');
    console.log(message);
    console.log('cmdLine');
    console.log(cmdLine);

    let requestUrl = apiUrl.apiContext + '/' +apiUrl.dfServerInfo + DF_APIKEY;
    requestHttpApi(requestUrl)
    .then(result => {
        // TODO : server result handler
        console.log(result.data);
    }).catch(err => {
        console.log(err);
        httpRequestFail(message);
    });
}


function checkApiCommend(message){
    
}

function writeLog(message, cmdLine) {
    console.log

}


/**
 * message fail handler.
 * @param {object} message target message object 
 */
function httpRequestFail(message){
    // TODO : 나중에 추가 헨들링 구현
    message.reply('api 요청에 실패하였습니다. 잠시 후 다시 시도해주세요.'); 
}

/**
 * send http request. return promise 
 * @param {string} url api url
 * @param {object} inputParams url params object 
 */
function requestHttpApi(url, inputParams) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params : inputParams
        })
        .then(response => {
            resolve(response);
        })
        .catch(err => {
            reject(err);
        })
    });
}


