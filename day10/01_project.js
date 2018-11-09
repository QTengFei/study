
var http = require('http');

var fs = require('fs');

var url = require('url');

var server = http.createServer(function (req, res) {
  if (req.url == '/favicon.ico') {
    return;
  }

  //使用url模块将字符串格式的请求地址转换为对象,并获取其中的pathname属性
  var pathname = url.parse(req.url).pathname
  //如果是 / 请求,将pathname重新赋值为/index.html
  if(pathname=='/'){
    pathname = '/index.html';
  }

  //根据pathname来读取project文件夹下的内容
  fs.readFile('./project'+pathname,function(err,data){
    if(err){
      console.log(err);
      return ;
    }
    res.end(data);
  })



});

server.listen(4000, 'localhost');
