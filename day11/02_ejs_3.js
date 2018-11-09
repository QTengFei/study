var http = require('http');
var fs = require('fs');
var ejs = require('ejs'); //引入ejs模块

var server = http.createServer(function (req, res) {
  if (req.url == '/favicon.ico') {
    return;
  }
  res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
  fs.readFile('./02_ejs_3.html',function(err,data){
    if(err){
      console.log(err);
      res.end('加载页面出错');
      return;
    }
    // res.end(data);  //没有出错,返回数据
    //模拟一个数据
    // var info = {msg:'来自服务器的信息'};
    //数据数组
    // var info = {msg:[1,2,3,4,5]};
    //对象
    // var info = {msg:{id:101,name:'jack'}};
    //对象数组
    var info = {msg:[{id:101,name:'jack'},{id:102,name:'rose'}]};
    //使用ejs将数据(填充/渲染)到模板中
    var html = ejs.render(data.toString(),info);
    //将渲染后的结果返回给页面
    res.end(html);
  })
});
server.listen(4000, 'localhost');