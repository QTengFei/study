
//引入Student类
var stu = require('./Student.js');

//创建对象
var s1 = new stu('光头强',99);
console.log('属性:'+s1.name+","+s1.age);
s1.study();
s1.sayHi();