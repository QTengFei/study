var express = require('express');
var route = express.Router();

route.get('/',function(req,res){
  res.send('这是teacher的/请求');
});

route.get('/a',function(req,res){
  res.send('这是teacher的/a请求');
});

route.get('/b',function(req,res){
  res.send('这是teacher的/b请求');
});

module.exports = route;