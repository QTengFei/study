//使用express框架创建服务器
var express = require('express');

var app = express();

app.listen(4000);

app.set('view engine','ejs');

app.get('/',function(req,res){
  // 处理的请求路径忽略大小写
  // 忽略参数
  // console.log(req.url);
  // res.send('服务器返回的数据');
  //模拟数据
  var data = {stus:[
    {id:1,name:'zhangsan',sex:'M',age:23},
    {id:2,name:'lisi',sex:'F',age:22},
    {id:3,name:'wanger',sex:'M',age:21},
    {id:4,name:'mazi',sex:'F',age:20}
  ]};
  res.render('01_template',data);
});