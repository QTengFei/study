// 使用querystring

var qs = require('querystring');

var url = '/a/b/c?a=1&b=3&name=zhangsan';

//使用querystring转换成字符串为对象
var obj = qs.parse(url);
console.log(obj);