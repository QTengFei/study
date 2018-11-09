
require('./b.js');

//引用a.js文件
var a = require('./a.js');

//调用属性
console.log("module中调用a.js属性:"+a.aa);
console.log('module中调用a.js方法:');
a.bb();
