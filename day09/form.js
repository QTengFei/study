var http = require('http');
var fs = require('fs');
var url = require('url');
var server = http.createServer(function (req, res) {
  res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
  
  if (req.url == '/favicon.ico') {
    return;
  }
  var urlObj = url.parse(req.url,true); //调用Url模块的parse方法,转换req.url字符串
  var pathname = urlObj.pathname;
  var query = urlObj.query;


  if(pathname== '/'){
    fs.readFile("./form.html",function(err,data){//显示form页面
      if(err){  //页面出错
        console.log(err); //打印错误信息
        res.end('加载页面出错');  //返回响应
        return;
      }
      res.end(data);  //正确结果,返回数据
    })
  }else if(pathname=="/tijiao"){ //处理/提交的请求
      // console.log(req.url);
      // res.end('成功接收到请求数据');
      var username = query.username;
      var password = query.password;
      
      //返回响应
      res.end("用户名:"+username+",密码:"+password);
    }else{
      //其他情况,不做出来,直接返回
      res.end("请求地址出错");
    }
});

server.listen(4000,'localhost');