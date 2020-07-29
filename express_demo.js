//express_demo.js 文件
const express = require('express');
let app = express();
// app.all('*', function (req, res, next) {
//     //res.header('Access-Control-Allow-Origin', '*');
//     //res.header('Access-Control-Allow-Headers', 'Content-Type');
//     //res.header('Access-Control-Allow-Methods', '*');
//     //res.header('Content-Type', 'application/json;charset=utf-8');
//     next();
//   });
const data = {
    "name": "BeJson",
    "url": "http://www.bejson.com",
    "page": 88,
    "isNonProfit": true,
    "address": {
        "street": "科技园路.",
        "city": "江苏苏州",
        "country": "中国"
    },
    "links": [
        {
            "name": "Google",
            "url": "http://www.google.com"
        },
        {
            "name": "Baidu",
            "url": "http://www.baidu.com"
        },
        {
            "name": "SoSo",
            "url": "http://www.SoSo.com"
        }
    ]
}
app.get('/getJson', function (req, res) {
   res.send({
       data,
       success: true,
       code: 1000
   });
})


//jsonp
app.get('/jsonp', function(req, res) {
let { wd, callback } = req.query
    console.log('调用一次')
    res.send(`${callback}(${JSON.stringify(data)})`)
})
let server = app.listen(10000, function () {
  let host = server.address().address
  let port = server.address().port
  console.log("应用实例，访问地址为 http://" + host + port)
})


//websocket
let WebSocket = require('ws').Server
let wss = new WebSocket({port: 8888})
console.log(wss)
wss.on('connection', function(ws) {
    ws.on('message', function(data) {
        console.log(data)
        ws.send('来自服务端消息')
    })
})


//被nginx代理的端口
app.get('/request', function(req, res) {
    res.writeHead(200, {
        'Set-Cookie': 'l=a123456;Path=/;Domain=localhost;'   // HttpOnly:脚本无法读取
    });
    // res.write(JSON.stringify(params));
    res.end('data');
})


