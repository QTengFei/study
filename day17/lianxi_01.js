var express = require('express');
var app = express();
app.listen(4000);

app.set('view engine','ejs');

app.get('/',function(req,res){
  res.render('index');
})

app.get('/tijiao',function(req,res){
  var name = req.query.username;
  var pwd = req.query.password;
  console.log(name);
  console.log(pwd);
  if(name == 'zhangsan' && pwd == 123 ){
    res.cookie('name',name);
    res.cookie('pwd',pwd);
    res.send('登陆成功');
  }else{
    res.send('登录失败');
  }
})