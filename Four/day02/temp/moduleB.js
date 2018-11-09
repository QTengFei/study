'use strict';

var _moduleA = require('./moduleA.js');

var _moduleA2 = _interopRequireDefault(_moduleA);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {fun} from './moduleA.js';

console.log((0, _moduleA2.default)(10));

// 使用
/* obj.getResultRequestHeader();
obj.fun2();
obj.fun3(); */

// 注意: 在模块B中不要随意修改 模块A中的接口
// 这是模块B
// 引入moduleA.js
// import * as obj from './moduleA.js';