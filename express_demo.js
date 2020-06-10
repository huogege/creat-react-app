//express_demo.js 文件
var express = require('express');
var app = express();
app.all('*', function (req, res, next) {
    //res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
   // res.header('Access-Control-Allow-Headers', 'Content-Type');
    //res.header('Access-Control-Allow-Methods', '*');
    //res.header('Content-Type', 'application/json;charset=utf-8');
    next();
  });
app.get('/getJson', function (req, res) {
    let data = {
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
   res.send({
       data: data,
       success: true,
       code: 1000
   });
})
 
var server = app.listen(8082, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s" + host + port)
 
})