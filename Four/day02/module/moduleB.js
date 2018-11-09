// 这是模块B
// 引入moduleA.js
// import * as obj from './moduleA.js';
import fun from './moduleA.js';
// import {fun} from './moduleA.js';

console.log(fun(10));

// 使用
/* obj.getResultRequestHeader();
obj.fun2();
obj.fun3(); */

// 注意: 在模块B中不要随意修改 模块A中的接口


