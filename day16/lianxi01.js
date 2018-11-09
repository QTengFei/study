var express = require('express');
var db = require('../day15/db/db.js');
var bdParser = require('body-parser');
var sd = require('silly-datetime');
var app = express();
app.listen(4000);

app.set('view engine','ejs');

app.use(bdParser.urlencoded({extended:true}));

app.get('/',function(req,res){
  db.findAll('message',function(err,docs){
    if(err){
      console.log(err);
    }else{
      console.log(docs);
      res.render('index',{msg:docs});

    }
  })
})

app.post('/tijiao',function(req,res){
  var username = req.body.username;
  // console.log(name);
  var message = req.body.message;
  // console.log(file); 
  var time = sd.format(new Date(),'YYYY-MM-DD HH:mm:ss');
  // console.log(time);
  var json = {username:username,message:message,time:time};
  // console.log(json);
  
  db.add('message',json,function(err,result){
    if(err){
      console.log(err);
    }else{
      console.log(result);
      res.redirect('/');
    }
  });
})

app.get('/update',funciton(req,res){
  db.find()
})