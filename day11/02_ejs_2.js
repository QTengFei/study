var ejs = require('ejs');   
var str = '这是一个数组:<%= stus[1].name %>';  //创建模板
var data = {names:['老母猪的产后护理','作者:吕大仙','日期:今天发布']};  //模拟数据
var stus = {
  stus:[
    {name:'zs'},
    {name:'lisi'},
    {name:'wangwu'}
  ]
};
var html = ejs.render(str,stus);//填充
console.log(html);