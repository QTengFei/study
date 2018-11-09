var ejs = require('ejs'); // 1. 引入ejs模块
var str = '今天开始学习<%= msg %>'; //2. 创建一个模板 
var data = {msg:"web"}; //3. 模拟一个填充的数据  //数据必须是k-v的json对象,其中key在模板中被调用
var html = ejs.render(str,data);   //  4. 将数据填充到模板中  //返回值为一个完整的视图
console.log(html);